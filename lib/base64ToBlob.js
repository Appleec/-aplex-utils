'use strict';

var isObject = require('./isObject');

/**
 * sortObject
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {object} obj The value to process.
 * @param {string} [order='asc'] The value to process.
 * @returns {blob} Returns the number.
 * @example
 *
 * _.parseURL(3.2);
 * // => 3.2
 *
 */
function sortObject(obj, order = 'asc') {
  const keys = Object.keys(obj);
  const sortedKeys = order === 'asc' ? keys.sort() : keys.reverse();
  return sortedKeys.reduce((val, key) => {
    const v = obj[key];
    if (isObject(v)) {
      val[key] = sortObject(v, order);
    } else if (Array.isArray(v)) {
      val[key] = order === 'asc' ? v.sort() : v.reverse();
    } else {
      val[key] = v;
    }
    return val;
  }, {});
}

module.exports = sortObject;
