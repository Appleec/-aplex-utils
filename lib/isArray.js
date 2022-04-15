/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

var numberTag = '[object Array]';

 /**
 * Checks if `value` is classified as an `Array` object.
 *
 * @since 1.0.0
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 */
function isArray(value) {
    return isObjectLike(value) && baseGetTag(value) === numberTag;
}

module.exports = isArray;
