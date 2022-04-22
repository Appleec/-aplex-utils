'use strict';

/**
 * Calculate byte length
 *
 * @summary byteLength.
 * @static
 * @since 1.0.4
 * @author appleex <771992522@qq.com>
 * @category Util
 * @param {string} str The value to check.
 * @returns {number} Returns the byte length of an utf8 string.
 * @example
 *
 * _.byteLength('abcd');
 * // => 4
 *
 * _.byteLength('你是谁');
 * // => 9
 *
 *
 */
function byteLength(str) {
  // returns the byte length of an utf8 string
  let s = str.length;
  for (var i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i);
    if (code > 0x7f && code <= 0x7ff) s++;
    else if (code > 0x7ff && code <= 0xffff) s += 2;
    if (code >= 0xDC00 && code <= 0xDFFF) i--;
  }
  return s;
}

module.exports = byteLength;
