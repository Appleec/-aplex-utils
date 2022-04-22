/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

var isDate = require('./isDate');

 /**
 * Checks if `preDate` and `curDate` is the same week.
 *
 * @summary isSameWeek
 * @since 1.0.0
 * @param {*} preDate - The value to check.
 * @param {*} curDate - The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * var preDate = new Date(), curDate = new Date()
 * _.isSameWeek(preDate, curDate);
 * // => true
 *
 * var preDate = new Date(new Date().setDate(new Date().getDate()-1)), curDate = new Date()
 * _.isSameWeek(preDate, curDate);
 * // => false
 *
 */
function isSameWeek(preDate, curDate) {
     if (!isDate(preDate) || !isDate(curDate)) {
         return false;
     }
     if (preDate - curDate > 0) {
         [preDate, curDate] = [curDate, preDate];
     }
     let gap = (curDate - preDate) / 86400000;
     return curDate.getDay() >= preDate.getDay() && gap < 7;
}

module.exports = isSameWeek;
