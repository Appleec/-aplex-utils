/**
 *  Create by appleex on 2022/4/18 10:43 上午.
 */
'use strict';

/**
 * Unit conversion
 * @summary convertToUnit
 *
 * @static
 * @since 1.0.0
 * @author appleex <771992522@qq.com>
 * @category Util
 * @param {*} str The value to check.
 * @param {string} [unit='px'] The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.convertToUnit();
 * // => undefined
 *
 * _.convertToUnit(16);
 * // => 16px
 *
 * _.convertToUnit('a');
 * // => a
 *
 * _.convertToUnit('16', 'g');
 * // => 16g
 *
 */
function convertToUnit(str, unit = 'px') {
  if (str == null || str === '') {
    return undefined;
  } else if (isNaN(+str)) {
    return String(str);
  } else {
    return `${Number(str)}${unit}`;
  }
}

module.exports = convertToUnit;
