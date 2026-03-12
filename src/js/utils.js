/**
 * Utility functions
 * Reusable helper functions for the application
 */

'use strict';

/**
 * Debounce function
 * Delays execution until after wait milliseconds have elapsed since the last call
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function
 * Ensures function is called at most once per specified time period
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
function throttle(func, limit = 300) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Get element by selector
 * @param {string} selector - CSS selector
 * @returns {Element|null} - DOM element or null
 */
function getElement(selector) {
  return document.querySelector(selector);
}

/**
 * Get all elements by selector
 * @param {string} selector - CSS selector
 * @returns {NodeList} - NodeList of elements
 */
function getAllElements(selector) {
  return document.querySelectorAll(selector);
}

/**
 * Add event listener to element(s)
 * @param {Element|NodeList|string} target - Target element(s) or selector
 * @param {string} event - Event type
 * @param {Function} handler - Event handler
 */
function addEvent(target, event, handler) {
  if (typeof target === 'string') {
    target = getAllElements(target);
  }

  if (target instanceof NodeList) {
    target.forEach(element => {
      element.addEventListener(event, handler);
    });
  } else if (target instanceof Element) {
    target.addEventListener(event, handler);
  }
}

/**
 * Remove event listener from element(s)
 * @param {Element|NodeList|string} target - Target element(s) or selector
 * @param {string} event - Event type
 * @param {Function} handler - Event handler
 */
function removeEvent(target, event, handler) {
  if (typeof target === 'string') {
    target = getAllElements(target);
  }

  if (target instanceof NodeList) {
    target.forEach(element => {
      element.removeEventListener(event, handler);
    });
  } else if (target instanceof Element) {
    target.removeEventListener(event, handler);
  }
}

/**
 * Create element with attributes
 * @param {string} tag - HTML tag name
 * @param {Object} attributes - Element attributes
 * @param {string} content - Inner HTML content
 * @returns {Element} - Created element
 */
function createElement(tag, attributes = {}, content = '') {
  const element = document.createElement(tag);

  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'class') {
      element.className = value;
    } else if (key === 'style') {
      element.style.cssText = value;
    } else {
      element.setAttribute(key, value);
    }
  });

  if (content) {
    element.innerHTML = content;
  }

  return element;
}

/**
 * Check if element is in viewport
 * @param {Element} element - DOM element
 * @returns {boolean} - Whether element is in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Format date
 * @param {Date|string|number} date - Date to format
 * @param {string} format - Format string (default: 'YYYY-MM-DD')
 * @returns {string} - Formatted date string
 */
function formatDate(date, format = 'YYYY-MM-DD') {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');

  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day);
}

/**
 * Generate unique ID
 * @param {string} prefix - ID prefix
 * @returns {string} - Unique ID
 */
function generateId(prefix = 'id') {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Deep clone object
 * @param {Object} obj - Object to clone
 * @returns {Object} - Cloned object
 */
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Check if value is empty
 * @param {*} value - Value to check
 * @returns {boolean} - Whether value is empty
 */
function isEmpty(value) {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim() === '';
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

/**
 * Capitalize first letter of string
 * @param {string} str - String to capitalize
 * @returns {string} - Capitalized string
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Format currency
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (default: 'USD')
 * @returns {string} - Formatted currency string
 */
function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

// Export functions (if using modules)
// export {
//   debounce,
//   throttle,
//   getElement,
//   getAllElements,
//   addEvent,
//   removeEvent,
//   createElement,
//   isInViewport,
//   formatDate,
//   generateId,
//   deepClone,
//   isEmpty,
//   capitalize,
//   formatCurrency,
// };
