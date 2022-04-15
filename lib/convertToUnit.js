'use strict';

/**
 * convertToUnit
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {*} str The value to process.
 * @param {string} [unit='px'] The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.humanReadableFileSize(3.2);
 * // => 3.2
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
