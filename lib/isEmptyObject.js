/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

/**
 * Checks if `value` is empty as an object.
 *
 * @static
 * @since 1.0.4
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isEmptyObject({});
 * // => true
 *
 * _.isEmptyObject({ a: 1 });
 * // => false
 *
 */
function isEmptyObject(value) {
  // method: 1
  // for (const t in e) {
  //     return !1;
  // }
  // return !0;

  // method: 2
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  return !Object.keys(value).length;
}

module.exports = isEmptyObject;
