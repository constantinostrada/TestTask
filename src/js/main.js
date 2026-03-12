/**
 * Main JavaScript file
 * Entry point for the application
 */

// Import utility functions (if using modules)
// import { debounce, throttle } from './utils.js';

'use strict';

/**
 * Application initialization
 */
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

/**
 * Initialize the application
 */
function initApp() {
  console.log('Application initialized');

  // Initialize components
  initNavigation();
  initCTAButton();
  initContactForm();
  initCounter();
  initScrollBehavior();
}

/**
 * Navigation functionality
 */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}

/**
 * CTA Button functionality
 */
function initCTAButton() {
  const ctaButton = document.getElementById('cta-button');

  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  }
}

/**
 * Contact form handling
 */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
}

/**
 * Handle form submission
 * @param {Event} e - Form submit event
 */
function handleFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  // Validate form data
  if (validateFormData(data)) {
    // Simulate form submission
    console.log('Form submitted:', data);
    showNotification('Message sent successfully!', 'success');
    e.target.reset();
  } else {
    showNotification('Please fill in all fields correctly.', 'error');
  }
}

/**
 * Validate form data
 * @param {Object} data - Form data object
 * @returns {boolean} - Validation result
 */
function validateFormData(data) {
  const { name, email, message } = data;

  if (!name || !email || !message) {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  return true;
}

/**
 * Show notification message
 * @param {string} message - Notification message
 * @param {string} type - Notification type (success, error, info)
 */
function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    background-color: ${type === 'success' ? '#10b981' : '#ef4444'};
    color: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    animation: slideIn 0.3s ease-out;
  `;

  // Add animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);

  // Add to page
  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideIn 0.3s ease-out reverse';
    setTimeout(() => {
      notification.remove();
      style.remove();
    }, 300);
  }, 3000);
}

/**
 * Counter functionality
 */
function initCounter() {
  const counterDisplay = document.getElementById('counter-display');
  const incrementBtn = document.getElementById('increment-btn');
  const decrementBtn = document.getElementById('decrement-btn');
  const incrementFiveBtn = document.getElementById('increment-five-btn');

  let count = 0;

  function updateCounter() {
    counterDisplay.textContent = count;
  }

  decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter();
  });

  incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
  });

  incrementFiveBtn.addEventListener('click', () => {
    count += 5;
    updateCounter();
  });

  updateCounter(); // Initialize display
}

/**
 * Initialize scroll behavior
 */
function initScrollBehavior() {
  // Add scroll event listener with throttle
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
}

/**
 * Handle scroll events
 */
function handleScroll() {
  const header = document.querySelector('.header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
  }
}

// Export functions for use in other modules (if using modules)
// export { initApp, showNotification };
