/**
 *  Create by appleex on 2022/4/11 4:01 下午.
 */
'use strict';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 1.0.0
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]';
}

module.exports = isString;
