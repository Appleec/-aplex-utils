'use strict';

/**
 * parseTime
 * Parse the time to string
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {object|string|number} time The value to process.
 * @param {string} cFormat The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.parseTime(3.2);
 * // => 3.2
 *
 */
function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  // {y}-{m}-{d} {h}:{i}:{s}
  var format = cFormat || 'YYYY-MM-DD hh:mm:ss';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time);
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  var formatObj = {
    Y: date.getFullYear(), // year
    M: date.getMonth() + 1, // month
    D: date.getDate(), // day
    h: date.getHours(), // hours
    m: date.getMinutes(), // minute
    s: date.getSeconds(), // second
    a: date.getDay(), // week
    q: Math.floor((date.getMonth() + 3) / 3), //
    S: date.getMilliseconds() // millisecond
  };
  var time_str = format.replace(/(Y|M|D|h|m|s|a|q|S)+/g, (result, key) => {
    var value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value]; }
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return time_str;
}

module.exports = parseTime;
