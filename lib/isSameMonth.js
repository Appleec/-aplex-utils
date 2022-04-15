/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

var isDate = require('./isDate');

 /**
 * Checks if `preDate` and `curDate` is the same month.
 *
 * @since 1.0.0
 * @param {*} preDate - The value to check.
 * @param {*} curDate - The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * var preDate = new Date(), curDate = new Date()
 * _.isSameMonth(preDate, curDate);
 * // => true
 *
 * var preDate = new Date(new Date().setDate(new Date().getDate()-1)), curDate = new Date()
 * _.isSameMonth(preDate, curDate);
 * // => false
 *
 */
function isSameMonth(preDate, curDate) {
    if (!isDate(preDate) || !isDate(curDate)) {
        return false;
    }
    return preDate.getFullYear() === curDate.getFullYear() && preDate.getMonth() === curDate.getMonth();
}

module.exports = isSameMonth;
