'use strict';

var parseTime = require('./parseTime');

/**
 * currentTime
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {string} format The value to process.
 * @returns {date} Returns the number.
 * @example
 *
 * _.currentTime(3.2);
 * // => 3.2
 *
 */
function currentTime(format) {
  var date = new Date();
  return format ? parseTime(date, format) : parseTime(date, 'YYYY-MM-DD hh:mm:ss');
}

module.exports = currentTime;
