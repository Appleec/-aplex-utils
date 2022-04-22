/**
 *  Create by appleex on 2022/4/17 10:43 上午.
 */
'use strict';

/**
 * Add comma separator
 *
 * @summary addCommas
 * @author appleex <771992522@qq.com>
 * @static
 * @since 1.0.4
 * @category Util
 * @param {number|string} value The value to check.
 * @returns {string} Returns the string.
 * @example
 *
 * _.addCommas(20000);
 * // => 20,000
 *
 * _.addCommas('20000');
 * // => 20,000
 *
 * _.addCommas('120%');
 * // => 120%
 *
 * _.addCommas(20000.0015);
 * // => 20,000.0015
 *
 */
function addCommas(value) {
  if (value === '-') {
    return value;
  }

  let valStr = value.toString();
  let flag = false;

  if (valStr.slice(-1) === '%') {
    flag = true;
    valStr = valStr.slice(0, -1);
  }

  const aIntNum = valStr.split('.');

  aIntNum[0] = aIntNum[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  // if (aIntNum[0].length >= 5) {
  // }

  if (aIntNum[1] && aIntNum[1].length >= 5) {
    aIntNum[1] = aIntNum[1].replace(/(\d{3})/g, '$1 ');
  }

  return flag ? `${aIntNum.join('.')}%` : aIntNum.join('.');
}

module.exports = addCommas;
