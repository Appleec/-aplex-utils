/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

var objectToString = require('./_objectToString'),
    isObjectLike = require('./isObjectLike');

var blobTag = '[object Blob]';

/**
 * Checks if `value` is classified as an `Blob` object.
 *
 * @summary isBlob
 * @static
 * @since 1.0.4
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isBlob(new Blob());
 * // => true
 *
 * _.isBlob(NaN);
 * // => false
 *
 */
function isBlob(value) {
  return isObjectLike(value) && objectToString(value) === blobTag;
}

module.exports = isBlob;
