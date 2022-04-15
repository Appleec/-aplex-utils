/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

/**
 * Checks if `value` is a URL.
 *
 * @static
 * @since 1.0.4
 * @category Lang
 * @param {string} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isURL('https://www.baidu.com');
 * // => true
 *
 * _.isURL('https://127.0.0.1');
 * // => false
 *
 */
function isURL(value) {
  // eslint-disable-next-line no-useless-escape
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(value);
}

module.exports = isURL;
