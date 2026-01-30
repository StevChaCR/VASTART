// ============================================
// VASTART - Artist Hub JavaScript
// ============================================

// Artists Database
const artists = [
    {
        id: 1,
        name: "Man Yu",
        style: "Arte Colorido",
        bio: "Artista visual especializada en crear mundos vibrantes y llenos de color. Su trabajo explora la conexión entre las emociones humanas y el espectro cromático, transformando sentimientos en explosiones visuales que cautivan al espectador.",
        fullBio: "Man Yu es una artista visual cuyo trabajo se caracteriza por el uso audaz del color y la capacidad de transmitir emociones profundas a través de composiciones vibrantes. Con años de experiencia en ilustración y arte digital, ha desarrollado un estilo único que fusiona técnicas tradicionales con herramientas digitales modernas.\n\nSu filosofía artística se centra en la idea de que el color tiene el poder de sanar, inspirar y conectar a las personas. Cada pieza que crea es una invitación a explorar un universo donde las emociones toman forma y color.",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&h=500&fit=crop",
        services: [
            { name: "Ilustración personalizada", price: "Desde $50" },
            { name: "Retratos artísticos", price: "Desde $80" },
            { name: "Arte para redes sociales", price: "Desde $30" },
            { name: "Murales digitales", price: "Consultar" }
        ],
        contact: {
            email: "manyu@vastart.com",
            instagram: "@manyu.art",
            twitter: "@manyuart"
        }
    }
    // Puedes agregar más artistas aquí siguiendo el mismo formato
];

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');
const artistsGrid = document.getElementById('artistsGrid');
const artistModal = document.getElementById('artistModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const joinForm = document.getElementById('joinForm');
const logo = document.querySelector('.logo');

// ============================================
// Navigation
// ============================================

function setActiveSection(sectionId) {
    // Update nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        }
    });

    // Update sections
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });

    // Close mobile menu
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navigation click handlers
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.dataset.section;
        setActiveSection(sectionId);
        history.pushState(null, '', `#${sectionId}`);
    });
});

// Logo click - go to about
logo.addEventListener('click', () => {
    setActiveSection('about');
    history.pushState(null, '', '#about');
});

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Handle browser back/forward
window.addEventListener('popstate', () => {
    const hash = window.location.hash.slice(1) || 'about';
    setActiveSection(hash);
});

// ============================================
// Artists Grid
// ============================================

function createArtistCard(artist) {
    const card = document.createElement('div');
    card.className = 'artist-card';
    card.dataset.artistId = artist.id;
    
    card.innerHTML = `
        <img src="${artist.image}" alt="${artist.name}" class="artist-card-image" onerror="this.style.background='linear-gradient(135deg, #FFF0E8, #FFE0D0)'">
        <div class="artist-card-content">
            <h3 class="artist-card-name">${artist.name}</h3>
            <span class="artist-card-style">${artist.style}</span>
            <p class="artist-card-bio">${artist.bio}</p>
            <div class="artist-card-cta">
                <span>Ver perfil</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openArtistModal(artist));
    
    return card;
}

function renderArtistsGrid() {
    artistsGrid.innerHTML = '';
    artists.forEach(artist => {
        artistsGrid.appendChild(createArtistCard(artist));
    });
}

// ============================================
// Artist Modal
// ============================================

function openArtistModal(artist) {
    const servicesHTML = artist.services.map(service => `
        <div class="service-item">
            <span class="service-name">${service.name}</span>
            <span class="service-price">${service.price}</span>
        </div>
    `).join('');

    modalBody.innerHTML = `
        <div class="artist-profile">
            <div class="artist-profile-image" style="background-image: url('${artist.image}')"></div>
            <div class="artist-profile-info">
                <h2 class="artist-profile-name">${artist.name}</h2>
                <span class="artist-profile-style">${artist.style}</span>
                <p class="artist-profile-bio">${artist.fullBio.replace(/\n\n/g, '</p><p class="artist-profile-bio">')}</p>
                
                <div class="services-section">
                    <h3 class="services-title">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                        Servicios
                    </h3>
                    <div class="services-list">
                        ${servicesHTML}
                    </div>
                </div>
                
                <div class="artist-contact">
                    <a href="mailto:${artist.contact.email}" class="btn-contact">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        Contactar
                    </a>
                </div>
                
                <div class="artist-social">
                    ${artist.contact.instagram ? `<a href="https://instagram.com/${artist.contact.instagram.replace('@', '')}" target="_blank" class="social-icon" title="Instagram">IG</a>` : ''}
                    ${artist.contact.twitter ? `<a href="https://twitter.com/${artist.contact.twitter.replace('@', '')}" target="_blank" class="social-icon" title="Twitter">X</a>` : ''}
                </div>
            </div>
        </div>
    `;

    artistModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeArtistModal() {
    artistModal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeArtistModal);

artistModal.addEventListener('click', (e) => {
    if (e.target === artistModal) {
        closeArtistModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && artistModal.classList.contains('active')) {
        closeArtistModal();
    }
});

// ============================================
// Join Form
// ============================================

joinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(joinForm);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    
    // Show success message
    joinForm.innerHTML = `
        <div class="success-message active">
            <div class="success-icon">🎉</div>
            <h3>¡Solicitud enviada!</h3>
            <p>Gracias por tu interés en VASTART. Revisaremos tu solicitud y te contactaremos pronto.</p>
        </div>
    `;
    
    // In a real app, you would send this data to a server
    // fetch('/api/join', { method: 'POST', body: JSON.stringify(data) })
});

// ============================================
// Initialize
// ============================================

function init() {
    // Render artists
    renderArtistsGrid();
    
    // Check URL hash on load
    const hash = window.location.hash.slice(1);
    if (hash && ['about', 'artists', 'join'].includes(hash)) {
        setActiveSection(hash);
    }
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', init);

// ============================================
// Utility: Add new artist (for future use)
// ============================================

function addArtist(artistData) {
    const newId = Math.max(...artists.map(a => a.id)) + 1;
    artists.push({ ...artistData, id: newId });
    renderArtistsGrid();
}

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { artists, addArtist };
}
