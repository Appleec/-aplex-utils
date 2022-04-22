/**
 *  Create by appleex on 2022/4/20 10:43 上午.
 */
'use strict';

var isDate = require('./isDate');

/**
 * Convert date string to date
 * parseDate
 *
 * @summary toDate
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toDate();
 * // =>
 *
 */
function toDate(value) {
  if (!value) {
    return value;
  }
  if (isDate(value)) {
    return value;
  } else {
    value = value.replace(/-/g, '/');
    return new Date(value);
  }
}

module.exports = toDate;
