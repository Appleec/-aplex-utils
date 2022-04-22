/**
 *  Create by appleex on 2022/4/18 9:52 上午.
 */
'use strict';

var find = require('./find');

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @summary deepCopy
 * @static
 * @since 1.0.0
 * @category Function
 * @param {object} obj The value to process.
 * @param {array<object>} cache The value to process.
 * @returns {*} Returns the number.
 * @example
 *
 * _.deepCopy();
 * // => undefined
 *
 * _.deepCopy({a: 1});
 * // => {a: 1}
 *
 */

function deepCopy(obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj);
  if (hit) {
    return hit.copy;
  }

  const copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  });

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy;
}

module.exports = deepCopy;
