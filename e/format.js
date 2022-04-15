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
function formatTimeToHM(date, earlier) {
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
 * @desc 字符串的首字母大写
 * @param {string} str - 字符串
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
function currentTime(format) {
    var date = new Date();
    return format ? parseTime(date, format) : parseTime(date, 'YYYY-MM-DD hh:mm:ss');
}

/**
 * toUpperCase
 *
 * @param {string} str string
 * @return {string}
 */
function toUpperCase(str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

/**
 * parseURL
 * 解析 URL
 *
 * @param  {string} ourl [description]
 * @return {object}      [description]
 */
function parseURL(ourl) {
    if (!ourl) {
        return {};
    }

    const url = ourl.toString();
    const a = document.createElement('a');
    a.href = url;
    const ret = {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        origin: a.origin,
        port: a.port,
        query: a.search,
        // eslint-disable-next-line no-useless-escape,no-sparse-arrays
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: a.hash.replace('#', ''),
        // eslint-disable-next-line no-useless-escape
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        // eslint-disable-next-line no-useless-escape,no-sparse-arrays
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/'),
        params: (function () {
            const ret = {};
            const seg = a.search.replace(/^\?/, '').split('&').filter(function (v, i) {
                if (v !== '' && v.indexOf('=')) {
                    return true;
                }
            });
            seg.forEach(function (element, index) {
                const idx = element.indexOf('=');
                const key = element.substring(0, idx);
                const val = element.substring(idx + 1);
                ret[key] = val;
            });
            return ret;
        })(),
    };

    // 覆盖origin, IE11中origin是空的
    if (!ret.origin) {
        ret.origin = [ret.protocol, '://', ret.host, ':', ret.port].join('');
    }

    // origin末尾加个/
    if (ret.origin && !/\/$/.test(ret.origin)) ret.origin += '/';
    return ret;
}

/**
 * base64toBlob
 *
 * @param {string} b64Data - base64
 * @param {string} contentType - contentType
 * @param {number} sliceSize - sliceSize
 * @return {Blob}
 */
function base64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {
        type: contentType
    });
    return blob;
}

/**
 * sortObject
 *
 * @param {object} obj - object
 * @param {string} order - asc/desc
 * @return {string}
 */
function sortObject(obj, order = 'asc') {
    const keys = Object.keys(obj);
    const sortedKeys = order === 'asc' ? keys.sort() : keys.reverse();
    return sortedKeys.reduce((val, key) => {
        const v = obj[key];
        if (__is.isObject(v)) {
            val[key] = sortObject(v, order);
        } else if (Array.isArray(v)) {
            val[key] = order === 'asc' ? v.sort() : v.reverse();
        } else {
            val[key] = v;
        }
        return val;
    }, {});
}

/**
 * lowerFirst
 *
 * @desc 字符串的首字母小写
 * @param {string} str - 字符串
 * @return {string}
 */
function lowerFirst(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * currentTimeStr
 * @desc 当前时间
 *
 * @return {string}
 */
function currentTimeStr() {
    return new Date().toLocaleTimeString('en-US', {
        hour12: false
    });
}

/**
 * parseTime
 * @description Parse the time to string
 * @param {(Object|string|number)} time - time
 * @param {string} cFormat - format
 *
 * @example
 * let d = new Date();
 * parseTime(d, 'YYYY-MM-DD');
 *
 * // return '2021-12-15 15:39:33'
 *
 * @returns {string}
 */
function parseTime(time, cFormat) {
    if (arguments.length === 0) {
        return null;
    }
    // {y}-{m}-{d} {h}:{i}:{s}
    const format = cFormat || 'YYYY-MM-DD hh:mm:ss';
    let date;
    if (typeof time === 'object') {
        date = time;
    } else {
        if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
            time = parseInt(time);
        }
        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000;
        }
        date = new Date(time);
    }
    const formatObj = {
        Y: date.getFullYear(), // year
        M: date.getMonth() + 1, // month
        D: date.getDate(), // day
        h: date.getHours(), // hours
        m: date.getMinutes(), // minute
        s: date.getSeconds(), // second
        a: date.getDay(), // week
        q: Math.floor((date.getMonth() + 3) / 3), //
        S: date.getMilliseconds() // millisecond
    }
    const time_str = format.replace(/(Y|M|D|h|m|s|a|q|S)+/g, (result, key) => {
        let value = formatObj[key];
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value]; }
        if (result.length > 0 && value < 10) {
            value = '0' + value;
        }
        return value || 0;
    });
    return time_str;
}

/**
 * formatTime
 * @param {number} time - Timestamp
 * @param {string} option
 * @returns {string}
 */
function formatTime(time, option) {
    if (('' + time).length === 10) {
        time = parseInt(time) * 1000;
    } else {
        time = +time;
    }
    const d = new Date(time);
    const now = Date.now();

    const diff = (now - d) / 1000;

    if (diff < 30) {
        return '刚刚';
    } else if (diff < 3600) {
        // less 1 hour
        return Math.ceil(diff / 60) + '分钟前';
    } else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + '小时前';
    } else if (diff < 3600 * 24 * 2) {
        return '1天前';
    }
    if (option) {
        return parseTime(time, option);
    } else {
        return (
            d.getMonth() +
            1 +
            '月' +
            d.getDate() +
            '日' +
            d.getHours() +
            '时' +
            d.getMinutes() +
            '分'
        );
    }
}

__exp.currentTimeStr = currentTimeStr;
__exp.currentTime = currentTime;
__exp.formatTimeToHM = formatTimeToHM;
__exp.formatTime = formatTime;
__exp.parseTime = parseTime;
__exp.parseDate = parseDate;
__exp.sortObject = sortObject;
__exp.base64toBlob = base64toBlob;
__exp.parseURL = parseURL;
__exp.toUpperCase = toUpperCase;
__exp.upperFirst = upperFirst;
__exp.lowerFirst = lowerFirst;
__exp.convertToUnit = convertToUnit;
__exp.humanReadableFileSize = humanReadableFileSize;
__exp.trim = trim;
