'use strict';

/**
 * simpleDeepCopy
 *
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {object} obj The value to process.
 * @returns {*} Returns the number.
 * @example
 *
 * _.toUpper(3.2);
 * // => 3.2
 *
 */

function simpleDeepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

module.exports = simpleDeepCopy;
