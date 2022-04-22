/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

/**
 * Checks if browser is IE
 *
 * @summary isIE
 * @static
 * @since 1.0.4
 * @category Lang
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 *
 */
function isIE() {
  return !!window.ActiveXObject || 'ActiveXObject' in window;
}

module.exports = isIE;
