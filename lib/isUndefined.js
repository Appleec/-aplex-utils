/**
 *  Create by appleex on 2022/4/20 5:13 下午.
 */
'use strict';

/**
 * Checks if `value` is `undefined`.
 *
 * @summary isUndefined
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;
