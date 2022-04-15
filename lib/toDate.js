var isDate = require('./isDate');

/**
 * Convert date string to date
 * parseDate
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toDate(3.2);
 * // => 3.2
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
