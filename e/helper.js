/**
 * Created by appleex on 2020/2/18
 */
"use strict";

var __is = require('./is');
var __fm = require('./format');
var __fn = require('./fn');
var __get = require('./get');

Date.prototype.format = function(regex) {
    let o = {
        "M+": this.getMonth() + 1,// month
        "D+": this.getDate(), // day
        "h+": this.getHours(), // hours
        "m+": this.getMinutes(), // minute
        "s+": this.getSeconds(), // second
        "q+": Math.floor((this.getMonth() + 3) / 3), //
        "S": this.getMilliseconds() // millisecond
    };
    if (/(Y+)/.test(regex)) {
        regex = regex.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        let _regex = new RegExp(`(${k})`);
        if (_regex.test(regex)) {
            regex = regex.replace(RegExp.$1,
                (RegExp.$1.length === 1) ? (o[k]) : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return regex;
};

/**
 * Turn hours into minutes into numbers
 *
 * @param date
 * @param earlier
 * @returns {number}
 */
function hmTimeNumber(date, earlier) {
    if (__is.isString(date)) {
        try {
            date = this.parseDate(date);
        } catch (e) {
            return 0;
        }
    }
    if (__is.isDate(date)) {
        if (!earlier || !__is.isNumber(earlier)) {
            earlier = 0;
        }
        return date.getHours() * 100 + (date.getMinutes() - earlier);
    } else {
        return 0;
    }
}

/**
 * Format time
 *
 * @param {String} format The String to format
 * @returns {String}
 */
function timer(format) {
    var date = new Date();
    return format ? date.format(format) : date.format('YYYY-MM-DD hh:mm:ss');
}

module.exports = {
    ...__is,
    ...__fm,
    ...__fn,
    ...__get,
    timer,
    hmTimeNumber
};
