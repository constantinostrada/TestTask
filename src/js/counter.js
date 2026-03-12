/**
 * Counter functionality
 */

'use strict';

let count = 0;
const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');
const divideBtn = document.getElementById('divide-btn');

function updateDisplay() {
  if (counterDisplay) {
    counterDisplay.textContent = count;
  }
}

function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  count--;
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}

function divideByFifteen() {
  if (count === 0) {
    alert("Cannot divide by 15 when the counter is zero.");
    return;
  }
  count = Math.floor(count / 15);
  updateDisplay();
}

/**
 * Initialize counter event listeners
 */
export function initCounter() {
  if (incrementBtn) {
    incrementBtn.addEventListener('click', increment);
  }
  if (decrementBtn) {
    decrementBtn.addEventListener('click', decrement);
  }
  if (resetBtn) {
    resetBtn.addEventListener('click', reset);
  }
  if (divideBtn) {
    divideBtn.addEventListener('click', divideByFifteen);
  }
  updateDisplay(); // Initial display update
}
