'use strict';

/**
 * addCommas
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {*} val The value to process.
 * @returns {string} Returns the number.
 * @example
 *
 * _.toUpper(3.2);
 * // => 3.2
 *
 */
function addCommas(val) {
  if (val === '-') {
    return val;
  }

  let valStr = val.toString();
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
