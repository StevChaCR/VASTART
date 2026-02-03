/* ============================================
   VASTART - Art Gallery JavaScript
   ============================================ */

// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const statNumbers = document.querySelectorAll('.stat-number');

// ============================================
// Navbar scroll effect
// ============================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// Mobile menu toggle
// ============================================

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ============================================
// Animated number counter
// ============================================

function animateNumber(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateNumber() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = target;
        }
    }
    
    updateNumber();
}

// ============================================
// Intersection Observer for animations
// ============================================

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

// Stats counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            statNumbers.forEach(num => {
                const target = parseInt(num.getAttribute('data-target'));
                animateNumber(num, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// General scroll animations
const animateElements = document.querySelectorAll('.animate-on-scroll');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

animateElements.forEach(el => {
    scrollObserver.observe(el);
});

// ============================================
// Smooth scroll for anchor links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Artist card interactions
// ============================================

const artistCards = document.querySelectorAll('.artist-card');

artistCards.forEach(card => {
    card.addEventListener('click', () => {
        const artistId = card.getAttribute('data-artist');
        // For now, just log - can expand to modal or page navigation
        console.log('Clicked artist:', artistId);
        // Future: openArtistModal(artistId) or window.location.href = `/artist/${artistId}`
    });
});

// ============================================
// Parallax effect on showcase images (subtle)
// ============================================

const showcaseItems = document.querySelectorAll('.showcase-item img');

window.addEventListener('scroll', () => {
    showcaseItems.forEach(img => {
        const rect = img.getBoundingClientRect();
        const scrolled = window.scrollY;
        const rate = (rect.top + scrolled) * 0.1;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            img.style.transform = `scale(1.1) translateY(${rate * 0.05}px)`;
        }
    });
});

// ============================================
// Initialize
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Add animate-on-scroll class to elements
    const elementsToAnimate = [
        '.about-content',
        '.artist-card',
        '.showcase-item',
        '.contact-content'
    ];

    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, index) => {
            el.classList.add('animate-on-scroll');
            el.style.transitionDelay = `${index * 0.1}s`;
            scrollObserver.observe(el);
        });
    });
});
