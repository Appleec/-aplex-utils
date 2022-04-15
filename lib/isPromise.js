/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

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
 * _.isPromise(new Promise());
 * // => true
 *
 * _.isPromise(NaN);
 * // => false
 *
 */
function isPromise(value) {
  return value && typeof value.then === 'function';
}

module.exports = isPromise;
