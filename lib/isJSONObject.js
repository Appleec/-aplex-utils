/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

/**
 * Checks if `value` is a JSON format
 *
 * @summary isJSONObject
 * @since 0.1.0
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isJSONObject(JSON.stringify({a: 1}));
 * // => true
 *
 * _.isJSONObject({});
 * // => false
 *
 * _.isJSONObject(null);
 * // => false
 */
function isJSONObject(value) {
  try {
    var o = JSON.parse(value);
    if (o && typeof o === 'object') {
      return true;
    }
  } catch (e) {
    // do nothing
  }
  return false;
}

module.exports = isJSONObject;
