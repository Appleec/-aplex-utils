'use strict';

/**
 * debounce
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {function} fn The value to process.
 * @param {number} delay The value to process.
 * @returns {function} Returns the number.
 * @example
 *
 * _.toUpper(3.2);
 * // => 3.2
 *
 */
function debounce(fn, delay) {
  let timeoutId = 0;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

module.exports = debounce;
