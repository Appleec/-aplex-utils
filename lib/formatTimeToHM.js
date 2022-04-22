/**
 *  Create by appleex on 2022/4/18 9:52 上午.
 */
'use strict';

var isDate = require('./isDate'),
    isString = require('./isString'),
    isNumber = require('./isNumber'),
    toDate = require('./toDate');

/**
 * Turn hours into minutes into numbers.
 *
 * @summary formatTimeToHM
 * @static
 * @since 1.0.4
 * @category Time
 * @param {Date} date The value to process.
 * @param {number} earlier The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.formatTimeToHM(new Date());
 * // => 2030
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
