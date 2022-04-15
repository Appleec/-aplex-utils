/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

var isObject = require('./isObject'),
    isFunction = require('./isFunction');

/**
 * Checks if `value` is classified as an `Stream` object.
 *
 * @static
 * @since 1.0.4
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isStream({});
 * // => true
 *
 * _.isStream(NaN);
 * // => false
 *
 */
function isStream(value) {
  return isObject(value) && isFunction(value.pipe);
}

module.exports = isStream;
