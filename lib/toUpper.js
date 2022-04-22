/**
 *  Create by appleex on 2022/4/20 5:13 下午.
 */
'use strict';

/**
 * toUpper
 *
 * @summary toUpper
 * @static
 * @since 1.0.4
 * @category String
 * @param {string} str The value to process.
 * @returns {string} Returns the number.
 * @example
 *
 * _.toUpper('abc');
 * // => ABC
 *
 */
function toUpper(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

module.exports = toUpper;
