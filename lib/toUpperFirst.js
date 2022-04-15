'use strict';

/**
 * toUpperFirst
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {string} str The value to process.
 * @param {string} [unit='px'] The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toUpperFirst(3.2);
 * // => 3.2
 *
 */
function toUpperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = toUpperFirst;
