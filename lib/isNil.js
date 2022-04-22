/**
 *  Create by appleex on 2022/4/19 5:13 下午.
 */
'use strict';

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @summary isNil
 * @static
 * @since 1.0.4
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 *
 * _.isNil('');
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;
