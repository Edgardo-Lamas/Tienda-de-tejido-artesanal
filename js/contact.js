/**
 * HANDYMAN - Contact Page JavaScript
 * Form handling, FAQ interactions, and contact utilities
 */

// Initialize contact page functionality
document.addEventListener('DOMContentLoaded', function() {
    if (!window.location.pathname.includes('contacto.html')) return;
    
    initializeContactForm();
    initializeFAQs();
    initializeScrollToMap();
    
    console.log('Contact page initialized! 📞');
});

// Contact form handling
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
        
        // Add real-time validation
        const requiredFields = contactForm.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            field.addEventListener('blur', validateField);
            field.addEventListener('input', clearFieldError);
        });
        
        // Enhanced form interactions
        addFormEnhancements();
    }
}

// Handle contact form submission
async function handleContactSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Validate form
    if (!validateContactForm(form)) {
        showNotification('Por favor, completa todos los campos requeridos correctamente.', 'error');
        return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    
    try {
        // Simulate form submission (replace with actual API call)
        await simulateFormSubmission(formData);
        
        // Success handling
        showNotification('¡Mensaje enviado correctamente! Te responderemos pronto.', 'success');
        form.reset();
        
        // Track successful submission
        trackContactSubmission(formData.get('subject'));
        
    } catch (error) {
        console.error('Form submission error:', error);
        showNotification('Hubo un error al enviar el mensaje. Intentá de nuevo o contactanos por WhatsApp.', 'error');
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
    }
}

// Validate entire contact form
function validateContactForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Validate individual field
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing error
    clearFieldError({ target: field });
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        errorMessage = 'Este campo es obligatorio';
        isValid = false;
    }
    
    // Email validation
    else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'Ingresa un email válido';
            isValid = false;
        }
    }
    
    // Phone validation (optional but if provided should be valid)
    else if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
        if (!phoneRegex.test(value)) {
            errorMessage = 'Ingresa un teléfono válido';
            isValid = false;
        }
    }
    
    // Name validation (no numbers)
    else if (field.name === 'name' && value) {
        const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
        if (!nameRegex.test(value)) {
            errorMessage = 'El nombre solo debe contener letras';
            isValid = false;
        }
    }
    
    // Message minimum length
    else if (field.name === 'message' && value && value.length < 10) {
        errorMessage = 'El mensaje debe tener al menos 10 caracteres';
        isValid = false;
    }
    
    // Show error if invalid
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

// Show field error
function showFieldError(field, message) {
    field.classList.add('error');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    field.parentNode.appendChild(errorElement);
}

// Clear field error
function clearFieldError(e) {
    const field = e.target;
    field.classList.remove('error');
    
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Add form enhancements
function addFormEnhancements() {
    // Auto-format phone number
    const phoneField = document.getElementById('phone');
    if (phoneField) {
        phoneField.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.startsWith('54')) {
                    value = '+' + value;
                } else if (value.startsWith('9')) {
                    value = '+54 ' + value;
                } else {
                    value = '+54 9 ' + value;
                }
            }
            e.target.value = value;
        });
    }
    
    // Character counter for message
    const messageField = document.getElementById('message');
    if (messageField) {
        const maxChars = 500;
        const counter = document.createElement('div');
        counter.className = 'char-counter';
        counter.textContent = `0/${maxChars}`;
        messageField.parentNode.appendChild(counter);
        
        messageField.addEventListener('input', (e) => {
            const length = e.target.value.length;
            counter.textContent = `${length}/${maxChars}`;
            
            if (length > maxChars * 0.9) {
                counter.style.color = 'var(--color-terracota)';
            } else {
                counter.style.color = 'var(--color-gray)';
            }
            
            if (length > maxChars) {
                e.target.value = e.target.value.substring(0, maxChars);
                counter.textContent = `${maxChars}/${maxChars}`;
            }
        });
    }
    
    // Subject field enhancement
    const subjectField = document.getElementById('subject');
    if (subjectField) {
        subjectField.addEventListener('change', (e) => {
            const messageField = document.getElementById('message');
            if (messageField && !messageField.value) {
                const placeholders = {
                    'productos': 'Me interesa conocer más sobre sus productos. Específicamente me gustaría información sobre...',
                    'personalizado': 'Quiero hacer un pedido personalizado. Las características que busco son...',
                    'precios': 'Quisiera consultar sobre precios de...',
                    'envios': 'Necesito información sobre envíos a...',
                    'mayorista': 'Estoy interesado en compras mayoristas para...',
                    'otro': 'Mi consulta es sobre...'
                };
                
                if (placeholders[e.target.value]) {
                    messageField.placeholder = placeholders[e.target.value];
                }
            }
        });
    }
}

// Simulate form submission (replace with actual backend)
function simulateFormSubmission(formData) {
    return new Promise((resolve, reject) => {
        // Simulate network delay
        setTimeout(() => {
            // Simulate 95% success rate
            if (Math.random() > 0.05) {
                resolve({
                    success: true,
                    message: 'Form submitted successfully'
                });
            } else {
                reject(new Error('Simulated network error'));
            }
        }, 2000);
    });
}

// FAQ functionality
function initializeFAQs() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        // Set initial state
        answer.style.maxHeight = '0px';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease-out, padding 0.3s ease-out';
    });
}

// Toggle FAQ function (called from HTML)
function toggleFAQ(button) {
    const faqItem = button.parentNode;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = button.querySelector('.faq-icon');
    
    const isOpen = faqItem.classList.contains('active');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
            const otherAnswer = item.querySelector('.faq-answer');
            const otherIcon = item.querySelector('.faq-icon');
            otherAnswer.style.maxHeight = '0px';
            otherAnswer.style.padding = '0 0';
            otherIcon.textContent = '+';
        }
    });
    
    // Toggle current FAQ
    if (isOpen) {
        faqItem.classList.remove('active');
        answer.style.maxHeight = '0px';
        answer.style.padding = '0 0';
        icon.textContent = '+';
    } else {
        faqItem.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.padding = '1rem 0';
        icon.textContent = '−';
    }
    
    // Track FAQ interaction
    trackFAQInteraction(button.textContent.trim(), !isOpen);
}

// Scroll to map functionality
function initializeScrollToMap() {
    // This function is called from the HTML button
}

function scrollToMap() {
    const mapSection = document.getElementById('map-section');
    if (mapSection) {
        mapSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Track map interaction
        trackMapInteraction('scroll_to_map');
    }
}

// Utility function for notifications (if not already available)
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

// Analytics tracking functions
function trackContactSubmission(subject) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'contact_form_submit', {
            'event_category': 'Contact',
            'event_label': subject,
            'value': 1
        });
    }
    
    console.log('Contact submission tracked:', subject);
}

function trackFAQInteraction(question, opened) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'faq_interaction', {
            'event_category': 'Contact',
            'event_label': question,
            'faq_action': opened ? 'open' : 'close'
        });
    }
    
    console.log('FAQ interaction tracked:', question, opened ? 'opened' : 'closed');
}

function trackMapInteraction(action) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'map_interaction', {
            'event_category': 'Contact',
            'event_label': action
        });
    }
    
    console.log('Map interaction tracked:', action);
}

// WhatsApp integration helpers
function openWhatsAppChat(message = '') {
    const baseURL = 'https://wa.me/5491123456789';
    const encodedMessage = encodeURIComponent(message || 'Hola! Me gustaría hacer una consulta sobre HANDYMAN.');
    const fullURL = `${baseURL}?text=${encodedMessage}`;
    
    window.open(fullURL, '_blank');
    
    trackContactMethod('whatsapp');
}

function trackContactMethod(method) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'contact_method_used', {
            'event_category': 'Contact',
            'event_label': method
        });
    }
    
    console.log('Contact method tracked:', method);
}

// Export functions for global use
window.ContactPage = {
    toggleFAQ,
    scrollToMap,
    openWhatsAppChat,
    showNotification
};

console.log('Contact page JavaScript loaded! 📧');