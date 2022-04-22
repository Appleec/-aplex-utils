/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

/**
 * Checks if `value` is an email.
 *
 * @summary isEmail
 * @static
 * @since 1.0.4
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isEmail('12345@qq.com');
 * // => true
 *
 * _.isEmail(NaN);
 * // => false
 *
 */
function isEmail(value) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value);
}

module.exports = isEmail;
