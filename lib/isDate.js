/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

var dateTag = '[object Date]';

 /**
 * Checks if `value` is classified as an `Date` object.
 *
 * @since 1.0.0
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isDate(new Date());
 * // => true
 *
 * _.isDate('Mon April 23 2012');
 * // => false
 *
 */
function isDate(value) {
    return isObjectLike(value) && baseGetTag(value) === dateTag && value !== 'Invalid Date';
}

module.exports = isDate;
