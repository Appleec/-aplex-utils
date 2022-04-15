'use strict';

/**
 * arrayFindIndex
 * 查找数组下标
 * TOTO：use native Array.find, Array.findIndex when IE support is dropped.
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {array} arr The value to process.
 * @param {function} pred The value to process.
 * @returns {string} Returns the number.
 * @example
 *
 * _.toUpper(3.2);
 * // => 3.2
 *
 */
function arrayFindIndex(arr, pred) {
  for (let i = 0; i !== arr.length; i++) {
    if (pred(arr[i])) {
      return i;
    }
  }
  return -1;
}

module.exports = arrayFindIndex;
