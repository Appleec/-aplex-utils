'use strict';

/**
 * toLowerFirst
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
function toLowerFirst(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

module.exports = toLowerFirst;
