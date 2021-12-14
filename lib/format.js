/**
 *  Create by appleex on 2021/10/15 3:15 下午.
 */
"use strict";

/**
 * @fileOverview This is base definition for all composed classes defined by the system
 * @module format
 * @requires is
 * @requires helper
 */
var __is = require('./is');
var __exp = module.exports;

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
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
    return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Convert date string to date
 *
 * @param {String} str
 * @returns {Date|*}
 */
function parseDate(str) {
    if (!str) {
        return str;
    }
    if (__is.isDate(str)) {
        return str;
    } else {
        str = str.replace(/-/g, '/');
        return new Date(str);
    }
}

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
 * humanReadableFileSize
 *
 * @param bytes
 * @param binary
 * @return {string}
 */
function humanReadableFileSize(bytes, binary = false) {
    const base = binary ? 1024 : 1000;

    if (bytes < base) {
        return `${bytes} B`;
    }

    const prefix = binary ? ['Ki', 'Mi', 'Gi'] : ['k', 'M', 'G'];
    let unit = -1;

    while (Math.abs(bytes) >= base && unit < prefix.length - 1) {
        bytes /= base;
        ++unit;
    }

    return `${bytes.toFixed(1)} ${prefix[unit]}B`;
}

/**
 * convertToUnit
 *
 * @param str
 * @param unit
 * @return {string|undefined}
 */
function convertToUnit(str, unit = 'px') {
    if (str == null || str === '') {
        return undefined;
    } else if (isNaN(+str)) {
        return String(str);
    } else {
        return `${Number(str)}${unit}`;
    }
}

/**
 * upperFirst
 *
 * @param str
 * @return {string}
 */
function upperFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
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

__exp.timer = timer;
__exp.upperFirst = upperFirst;
__exp.convertToUnit = convertToUnit;
__exp.humanReadableFileSize = humanReadableFileSize;
__exp.hmTimeNumber = hmTimeNumber;
__exp.parseDate = parseDate;
__exp.trim = trim;
