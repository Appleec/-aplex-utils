/**
 *  Create by appleex on 2022/4/20 10:43 上午.
 */
'use strict';

/**
 * simpleDeepCopy
 *
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @summary simpleDeepCopy
 * @static
 * @since 1.0.0
 * @category Function
 * @param {object} obj The value to process.
 * @returns {*} Returns the number.
 * @example
 *
 * _.simpleDeepCopy({});
 * // => {}
 *
 */

function simpleDeepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

module.exports = simpleDeepCopy;
