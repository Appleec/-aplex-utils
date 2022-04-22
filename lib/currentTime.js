/**
 *  Create by appleex on 2022/4/18 9:52 上午.
 */
'use strict';

var parseTime = require('./parseTime');

/**
 * Get current time
 *
 * @summary currentTime
 * @author appleex <771992522@qq.com>
 * @static
 * @since 1.0.0
 * @category Time
 * @param {string} format The value to process.
 * @returns {date} Returns the string.
 * @example
 *
 * _.currentTime();
 * // => 2022-04-18 13:53:24
 *
 * _.currentTime('YYYY-MM-DD');
 * // => 2022-04-18
 *
 */
function currentTime(format) {
  var date = new Date();
  return format ? parseTime(date, format) : parseTime(date, 'YYYY-MM-DD hh:mm:ss');
}

module.exports = currentTime;
