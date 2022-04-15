'use strict';

/**
 * toUpper
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {string} str The value to process.
 * @returns {string} Returns the number.
 * @example
 *
 * _.toUpper(3.2);
 * // => 3.2
 *
 */
function toUpper(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

module.exports = toUpper;
