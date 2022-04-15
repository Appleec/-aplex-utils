'use strict';

var arrayFindIndex = require('./arrayFindIndex');

/**
 * arrayFind
 * 查找数组中元素
 * array.find 方法返回数组中满足提供测试函数的第一个元素，否则返回undefined
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
function arrayFind(arr, pred) {
  const idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : undefined;
}

module.exports = arrayFind;
