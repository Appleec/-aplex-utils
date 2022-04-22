/**
 *  Create by appleex on 2022/4/20 10:32 上午.
 */
'use strict';

/**
 * toUpperFirst
 *
 * @summary toUpperFirst
 * @static
 * @since 1.0.4
 * @category String
 * @param {string} str The value to process.
 * @returns {string} Returns the number.
 * @example
 *
 * _.toUpperFirst('abc');
 * // => Abc
 *
 */
function toUpperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = toUpperFirst;
