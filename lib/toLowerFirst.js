/**
 *  Create by appleex on 2022/4/20 10:32 上午.
 */
'use strict';

/**
 * toLowerFirst
 *
 * @summary toLowerFirst
 * @static
 * @since 1.0.4
 * @category Lang
 * @param {string} str The value to process.
 * @returns {string} Returns the number.
 * @example
 *
 * _.toLowerFirst('Abc');
 * // => abc
 *
 */
function toLowerFirst(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

module.exports = toLowerFirst;
