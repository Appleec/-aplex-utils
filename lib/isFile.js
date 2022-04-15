/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

var objectToString = require('./_objectToString'),
    isObjectLike = require('./isObjectLike');

var fileTag = '[object File]';

/**
 * Checks if `value` is classified as an `File` object.
 *
 * @static
 * @since 1.0.4
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isFile(new File());
 * // => true
 *
 * _.isFile(NaN);
 * // => false
 *
 */
function isFile(value) {
  return isObjectLike(value) && objectToString(value) === fileTag;
}

module.exports = isFile;
