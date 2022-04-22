/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

/**
 * Checks if navigator is mobile.
 *
 * @summary isMobile
 * @static
 * @since 1.0.4
 * @category Lang
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 *
 */
function isMobile() {
  return !!navigator.userAgent.match(/mobile/i);
}

module.exports = isMobile;
