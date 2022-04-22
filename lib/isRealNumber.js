/**
 *  Create by appleex on 2022/4/20 5:13 下午.
 */
'use strict';

var isNumber = require('./isNumber');

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * @summary isRealNumber
 * @static
 * @since 1.0.0
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isRealNumber(3);
 * // => true
 *
 * _.isRealNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isRealNumber(Infinity);
 * // => true
 *
 * _.isRealNumber('3');
 * // => false
 *
 * _.isRealNumber(NaN);
 * // => false
 */
function isRealNumber(value) {
  return isNumber(value) && !isNaN(value);
}

module.exports = isRealNumber;
