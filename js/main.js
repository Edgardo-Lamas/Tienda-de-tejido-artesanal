/**
 * HANDYMAN - Premium Artisanal Website
 * JavaScript Main File
 * Features: Hero Carousel, Navigation, Animations, Forms
 */

// ===== GLOBAL VARIABLES =====
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
let slideInterval;

// ===== DOM ELEMENTS =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('header');
const newsletterForm = document.getElementById('newsletter-form');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeHeroSlider();
    initializeNavigation();
    initializeScrollAnimations();
    initializeScrollEffects();
    initializeForms();
    initializeLazyLoading();
    
    console.log('HANDYMAN website initialized successfully! 🧶');
});

// ===== HERO SLIDER =====
function initializeHeroSlider() {
    if (slides.length === 0) return;
    
    // Set first slide as active
    slides[0].classList.add('active');
    if (indicators.length > 0) indicators[0].classList.add('active');
    
    // Start automatic slideshow
    startSlideshow();
    
    // Add click handlers to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Pause on hover
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', pauseSlideshow);
        heroSection.addEventListener('mouseleave', startSlideshow);
    }
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    if (heroSection) {
        heroSection.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        heroSection.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide(); // Swipe left - next slide
            } else {
                previousSlide(); // Swipe right - previous slide
            }
        }
    }
}

function goToSlide(slideIndex) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to target slide and indicator
    slides[slideIndex].classList.add('active');
    if (indicators[slideIndex]) indicators[slideIndex].classList.add('active');
    
    currentSlide = slideIndex;
    
    // Reset slideshow timer
    pauseSlideshow();
    startSlideshow();
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex);
}

function previousSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
}

function startSlideshow() {
    if (slides.length <= 1) return;
    
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000); // Change slide every 5 seconds
}

function pauseSlideshow() {
    clearInterval(slideInterval);
}

// ===== NAVIGATION =====
function initializeNavigation() {
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Active nav link based on scroll position
    updateActiveNavLink();
    window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
}

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    // Header background on scroll
    window.addEventListener('scroll', throttle(() => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }, 10));
    
    // Parallax effect for hero (subtle)
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', throttle(() => {
            const scrolled = window.pageYOffset;
            const heroHeight = hero.offsetHeight;
            if (scrolled <= heroHeight) {
                const yPos = -(scrolled * 0.3);
                hero.style.transform = `translateY(${yPos}px)`;
            }
        }, 10));
    }
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add staggered animation for grid items
                if (entry.target.parentElement.classList.contains('products-grid') ||
                    entry.target.parentElement.classList.contains('features-grid') ||
                    entry.target.parentElement.classList.contains('reels-grid')) {
                    
                    const siblings = Array.from(entry.target.parentElement.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ===== FORMS =====
function initializeForms() {
    // Newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Contact forms (if present)
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
        form.addEventListener('submit', handleContactSubmit);
    });
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    if (!isValidEmail(email)) {
        showNotification('Por favor, introduce un email válido', 'error');
        return;
    }
    
    // Loading state
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    // Simulate API call (replace with actual implementation)
    setTimeout(() => {
        showNotification('¡Gracias por suscribirte! Te mantendremos al día con nuestras novedades.', 'success');
        e.target.reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Track event (if analytics are implemented)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'newsletter_signup', {
                'method': 'website_footer'
            });
        }
    }, 1500);
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Validate required fields
    const requiredFields = e.target.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });
    
    if (!isValid) {
        showNotification('Por favor, completa todos los campos requeridos', 'error');
        return;
    }
    
    // Loading state
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual implementation)
    setTimeout(() => {
        showNotification('¡Mensaje enviado correctamente! Te responderemos pronto.', 'success');
        e.target.reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Track event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'contact_form_submit', {
                'method': 'website'
            });
        }
    }, 2000);
}

// ===== LAZY LOADING =====
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                img.classList.add('loaded');
                imageObserver.unobserve(img);
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
            }
        });
    });
    
    lazyImages.forEach(img => {
        img.classList.add('loading');
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease-in-out';
        imageObserver.observe(img);
    });
}

// ===== VIDEO HANDLING =====
function initializeVideoPlayers() {
    const reelItems = document.querySelectorAll('.reel-item');
    
    reelItems.forEach(item => {
        const video = item.querySelector('.reel-video');
        const playButton = item.querySelector('.play-button');
        
        if (video && playButton) {
            playButton.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                    playButton.style.opacity = '0';
                    
                    video.addEventListener('pause', () => {
                        playButton.style.opacity = '1';
                    });
                    
                    video.addEventListener('ended', () => {
                        playButton.style.opacity = '1';
                    });
                } else {
                    video.pause();
                    playButton.style.opacity = '1';
                }
            });
        }
    });
}

// ===== PRODUCT INTERACTIONS =====
function initializeProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // If click is on a button or link, don't handle card click
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
                return;
            }
            
            const productLink = card.querySelector('.btn-primary');
            if (productLink) {
                window.open(productLink.href, '_blank');
            }
        });
        
        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// ===== UTILITY FUNCTIONS =====
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(400px)',
        transition: 'all 0.3s ease-in-out',
        maxWidth: '400px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
    });
    
    // Type-specific styles
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#10B981';
            break;
        case 'error':
            notification.style.backgroundColor = '#EF4444';
            break;
        case 'warning':
            notification.style.backgroundColor = '#F59E0B';
            break;
        default:
            notification.style.backgroundColor = '#3B82F6';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
    
    // Click to dismiss
    notification.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
}

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    // Hero slider keyboard controls
    if (e.key === 'ArrowLeft' && document.activeElement.closest('.hero')) {
        e.preventDefault();
        previousSlide();
    } else if (e.key === 'ArrowRight' && document.activeElement.closest('.hero')) {
        e.preventDefault();
        nextSlide();
    }
    
    // ESC to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

// ===== PERFORMANCE OPTIMIZATION =====
// Preload critical images
function preloadCriticalImages() {
    const criticalImages = [
        'img/gorras/WhatsApp Image 2025-09-18 at 12.21.33.jpeg',
        'img/muñecos/WhatsApp Image 2025-09-20 at 10.44.36.jpeg'
        // Add more critical images as needed
    ];
    
    criticalImages.forEach(imageSrc => {
        const img = new Image();
        img.src = imageSrc;
    });
}

// Initialize when images load
window.addEventListener('load', () => {
    initializeVideoPlayers();
    initializeProductCards();
    preloadCriticalImages();
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// ===== ANALYTICS HELPER =====
function trackEvent(eventName, parameters = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, parameters);
    }
    
    console.log('Event tracked:', eventName, parameters);
}

// Track page interactions
document.addEventListener('click', (e) => {
    // Track CTA button clicks
    if (e.target.classList.contains('btn-primary')) {
        trackEvent('cta_click', {
            button_text: e.target.textContent.trim(),
            page_location: window.location.href
        });
    }
    
    // Track product card clicks
    if (e.target.closest('.product-card')) {
        const productTitle = e.target.closest('.product-card').querySelector('.product-title')?.textContent;
        trackEvent('product_click', {
            product_name: productTitle,
            click_location: 'product_card'
        });
    }
});

console.log('HANDYMAN JavaScript loaded successfully! 🎨✨');