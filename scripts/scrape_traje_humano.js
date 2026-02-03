#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const https = require('https');

const PAGE_URL = 'https://www.manyuart.com/trajehumano';
const ASSETS_DIR = path.resolve(__dirname, '..', 'assets');
const MANYU_JS = path.resolve(__dirname, '..', 'manyu.js');

(async () => {
    console.log('Launching headless browser...');
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(60000);

    console.log(`Navigating to ${PAGE_URL}`);
    await page.goto(PAGE_URL, { waitUntil: 'networkidle2' });
    // Give time for client-side gallery code to run
    await page.waitForTimeout(2000);

    console.log('Extracting candidate images from page...');
    const items = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        const candidates = imgs
            .filter(img => img.src && img.src.includes('static.wixstatic.com/media/'))
            .map(img => {
                let title = img.alt || '';
                // try to find a caption nearby
                let caption = '';
                const parent = img.closest('figure, .gallery, .media, .slide, .wix-image, .pro-gallery__item');
                if (parent) {
                    const captionEl = parent.querySelector('figcaption, .caption, .title, h3, h4, .pro-gallery__item-title, .pro-gallery__item-description, p');
                    if (captionEl) caption = captionEl.innerText.trim();
                }
                if (!title && caption) title = caption;
                if (!title) title = img.src.split('/').pop();
                return { src: img.src, alt: img.alt || '', title, caption };
            });

        // deduplicate by src
        const seen = new Set();
        const unique = [];
        for (const it of candidates) {
            if (!seen.has(it.src)) {
                seen.add(it.src);
                unique.push(it);
            }
        }
        return unique;
    });

    if (!items || items.length === 0) {
        console.error('No artwork images found automatically. The site may render them differently or block scraping. Inspect manually.');
        await browser.close();
        process.exit(1);
    }

    console.log(`Found ${items.length} candidate images; selecting up to 28 artworks.`);
    const selected = items.slice(0, 28);

    // ensure assets dir exists
    if (!fs.existsSync(ASSETS_DIR)) fs.mkdirSync(ASSETS_DIR);

    // Download images
    console.log('Downloading images to assets/ ...');
    const downloaded = [];
    for (let i = 0; i < selected.length; i++) {
        const it = selected[i];
        const url = it.src;
        const urlObj = new URL(url);
        const ext = path.extname(urlObj.pathname).split('?')[0] || '.jpg';
        const filename = `traje-${String(i + 1).padStart(2, '0')}${ext}`;
        const outPath = path.join(ASSETS_DIR, filename);

        console.log(`Downloading ${i + 1}: ${url} -> assets/${filename}`);
        try {
            await downloadFile(url, outPath);
            downloaded.push({ file: `assets/${filename}`, title: sanitize(it.title), details: it.caption || 'Available - Contact for pricing' });
        } catch (err) {
            console.error(`Failed to download ${url}: ${err.message}`);
        }
    }

    await browser.close();

    if (downloaded.length === 0) {
        console.error('No images downloaded. Aborting update.');
        process.exit(1);
    }

    console.log('Updating manyu.js with the new artworks list...');
    const manyuSource = fs.readFileSync(MANYU_JS, 'utf8');

    // Build replacement artworks array string
    const artworksString = downloaded.map(d => `            { image: '${d.file}', title: ${JSON.stringify(d.title)}, details: ${JSON.stringify(d.details)} }`).join(',\n');

    const newBlock = `        artworks: [\n${artworksString}\n        ]`;

    // Replace the existing human-suit artworks block
    const replaced = manyuSource.replace(/'human-suit':\s*\{[\s\S]*?artist.*?\}/, '');
    // Instead we'll do a safer regex: locate the human-suit block start and its artworks array

    const humanRegex = /('human-suit':\s*\{[\s\S]*?artworks:\s*\[)([\s\S]*?)(\n\s*\]\s*\})/;
    if (!humanRegex.test(manyuSource)) {
        console.error('Could not locate the human-suit artworks block in manyu.js. Manual update required.');
        process.exit(1);
    }

    const updatedSource = manyuSource.replace(humanRegex, (m, p1, p2, p3) => `${p1}\n${artworksString}\n${p3}`);

    // Also update coverImage to the first downloaded image (local)
    const coverRegex = /('human-suit':\s*\{[\s\S]*?coverImage:\s*')((?:https?:\/\/)[^']+)(')/;
    let finalSource = updatedSource;
    if (coverRegex.test(updatedSource)) {
        finalSource = finalSource.replace(coverRegex, (m, a, oldUrl, b) => `${a}${downloaded[0].file}${b}`);
    }

    // Backup original
    fs.copyFileSync(MANYU_JS, MANYU_JS + '.bak');
    fs.writeFileSync(MANYU_JS, finalSource, 'utf8');

    console.log(`Updated manyu.js and backed up original to manyu.js.bak. ${downloaded.length} artworks added.`);
    console.log('Done. Open the site locally to verify the gallery (run a static server or open index.html).');

    function sanitize(s) {
        return s.replace(/\s+/g, ' ').trim();
    }

    function downloadFile(url, dest) {
        return new Promise((resolve, reject) => {
            const file = fs.createWriteStream(dest);
            const req = https.get(url, (res) => {
                if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                    // follow redirect
                    return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
                }
                if (res.statusCode !== 200) {
                    return reject(new Error(`HTTP ${res.statusCode}`));
                }
                res.pipe(file);
                file.on('finish', () => file.close(resolve));
            });
            req.on('error', (err) => {
                fs.unlink(dest, () => reject(err));
            });
        });
    }

})();
