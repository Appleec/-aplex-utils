/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
'use strict';

/**
 * debounce
 *
 * @summary debounce
 * @static
 * @since 1.0.0
 * @category Function
 * @param {function} fn The value to process.
 * @param {number} delay The value to process.
 * @returns {function} Returns.
 * @example
 *
 * _.debounce(fn, 32);
 * // =>
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
