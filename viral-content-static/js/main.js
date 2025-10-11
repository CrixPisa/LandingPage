// ============================================
// VIRALGUIDE - MAIN JAVASCRIPT
// ============================================

// LANGUAGE SYSTEM
let currentLang = 'it';

function toggleLanguage() {
    currentLang = currentLang === 'it' ? 'en' : 'it';
    updateLanguage();
}

function updateLanguage() {
    // Update all elements with lang-text class
    document.querySelectorAll('.lang-text').forEach(el => {
        const text = el.getAttribute('data-' + currentLang);
        if (text) {
            if (el.tagName === 'INPUT' || el.tagName === 'BUTTON') {
                el.value = text;
            } else {
                el.innerHTML = text;
            }
        }
    });
    
    // Update language toggle button flag and text
    const langFlag = document.querySelector('.lang-flag');
    const langToggleText = document.querySelector('.lang-toggle .lang-text');
    if (currentLang === 'it') {
        langFlag.textContent = '🇬🇧';
        langToggleText.textContent = 'EN';
    } else {
        langFlag.textContent = '🇮🇹';
        langToggleText.textContent = 'IT';
    }
    
    // Update page language attribute
    document.documentElement.lang = currentLang;
    
    // Update meta tags
    const title = currentLang === 'it' 
        ? 'ViralGuide - Crea Contenuti Virali Che Esplodono sui Social Media'
        : 'ViralGuide - Create Viral Content That Explodes on Social Media';
    document.title = title;
    
    const description = currentLang === 'it'
        ? 'La guida definitiva per creare contenuti virali su TikTok, Instagram, Facebook, LinkedIn e YouTube. Strategie testate dai migliori creator.'
        : 'The ultimate guide to create viral content on TikTok, Instagram, Facebook, LinkedIn and YouTube. Strategies tested by top creators.';
    document.querySelector('meta[name="description"]').content = description;
}

// COUNTDOWN TIMER - Scade 13 Ottobre 2025, 23:59
function initCountdown() {
    const targetDate = new Date('2025-10-13T23:59:59').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            document.getElementById('countdown').innerHTML = '<p class="expired">Offerta scaduta!</p>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// MOBILE MENU
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.remove('active');
}

// FAQ TOGGLE
function toggleFaq(element) {
    const item = element;
    const isActive = item.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(faq => {
        faq.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        item.classList.add('active');
    }
}

// SMOOTH SCROLL TO PRICING
function scrollToPricing() {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// HEADER SCROLL EFFECT
function initHeaderScroll() {
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
        } else {
            header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        }
        
        lastScroll = currentScroll;
    });
}

// ANIMATE ON SCROLL
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe testimonial cards
    document.querySelectorAll('.testimonial-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// CLOSE MOBILE MENU ON LINK CLICK
function initMobileMenuClose() {
    document.querySelectorAll('.mobile-menu-link').forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });
}

// TRACK BUTTON CLICKS (Optional - for analytics)
function trackButtonClick(buttonName) {
    console.log(`Button clicked: ${buttonName}`);
    // Add your analytics tracking here (Google Analytics, Facebook Pixel, etc.)
}

// ADD EVENT LISTENERS TO CTA BUTTONS
function initCTATracking() {
    document.querySelectorAll('.btn-primary, .payment-btn-final').forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent.trim();
            trackButtonClick(buttonText);
        });
    });
}

// INITIALIZE EVERYTHING ON PAGE LOAD
document.addEventListener('DOMContentLoaded', function() {
    // Initialize countdown timer
    initCountdown();
    
    // Initialize header scroll effect
    initHeaderScroll();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize mobile menu close on link click
    initMobileMenuClose();
    
    // Initialize CTA tracking
    initCTATracking();
    
    // Set initial language (Italian)
    updateLanguage();
    
    console.log('✅ ViralGuide Landing Page Loaded Successfully!');
});

// CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (mobileMenu.classList.contains('active') && 
        !mobileMenu.contains(event.target) && 
        !menuToggle.contains(event.target)) {
        closeMobileMenu();
    }
});

// PREVENT SCROLL WHEN MOBILE MENU IS OPEN
function preventScroll() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Update prevent scroll when menu toggles
const originalToggle = toggleMobileMenu;
toggleMobileMenu = function() {
    originalToggle();
    preventScroll();
};

// KEYBOARD ACCESSIBILITY
document.addEventListener('keydown', function(event) {
    // Close mobile menu with Escape key
    if (event.key === 'Escape') {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    }
});

// SMOOTH SCROLL FOR ALL ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            closeMobileMenu();
        }
    });
});

// PERFORMANCE OPTIMIZATION - Lazy load images (if any are added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// EASTER EGG - Console message
console.log('%c🚀 ViralGuide', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cLanding Page creata da Claude AI', 'font-size: 12px; color: #666;');
console.log('%cPer info: info@viralguide.com', 'font-size: 12px; color: #666;');