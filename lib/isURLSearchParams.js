/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

/**
 * Checks if `value` is classified as an `URLSearchParams` object.
 *
 * @summary isURLSearchParams
 * @static
 * @since 1.0.4
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isURLSearchParams({});
 * // => true
 *
 * _.isURLSearchParams(NaN);
 * // => false
 *
 */
function isURLSearchParams(value) {
  return typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams;
}

module.exports = isURLSearchParams;
