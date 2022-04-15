'use strict';

var isDate = require('./isDate'),
    isString = require('./isString'),
    isNumber = require('./isNumber'),
    toDate = require('./toDate');

/**
 * Turn hours into minutes into numbers.
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {*} date The value to process.
 * @param {*} earlier The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.formatTimeToHM(3.2);
 * // => 3.2
 *
 */
function formatTimeToHM(date, earlier) {
  if (isString(date)) {
    try {
      date = toDate(date);
    } catch (e) {
      return 0;
    }
  }
  if (isDate(date)) {
    if (!earlier || !isNumber(earlier)) {
      earlier = 0;
    }
    return date.getHours() * 100 + (date.getMinutes() - earlier);
  } else {
    return 0;
  }
}

module.exports = formatTimeToHM;
