/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

/**
 * Checks if `value` is `float`.
 *
 * @static
 * @since 1.0.4
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isFloat(new Promise());
 * // => true
 *
 * _.isFloat(NaN);
 * // => false
 *
 */
function isFloat(value) {
  if (value === 0) {
    return true;
  }

  if (!value) {
    return false;
  }

  const strP = /^-?\d+(\.\d+)?$/;

  if (!strP.test(value)) {
    return false;
  }

  try {
    if (parseFloat(value) !== value) {
      return false;
    }
  } catch (ex) {
    return false;
  }

  return true;
}

module.exports = isFloat;
