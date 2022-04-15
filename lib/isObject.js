/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

/**
 * Checks if `value` is the
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @since 0.1.0
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  // Judgment is a pure object (not an array, not a function)
  // return !!(val && typeof val === "object" && val.toString === "[object Object]");
  // return val !== null && Object.prototype.toString.call(val) === '[object Object]';
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;
