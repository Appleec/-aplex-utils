/**
 * Created by appleex on 2020/2/18
 */
"use strict";

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

var helper = module.exports;

// const
var toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Determine if a value is an Array
 *
 * @param val  The value to test
 * @returns {boolean}  True if value is an Array, otherwise false
 */
helper.isArray = (val) => {
    return toString.call(val) === '[object Array]';
};

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param val  The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
helper.isArrayBuffer = (val) => {
    return toString.call(val) === '[object ArrayBuffer]';
};

/**
 * Determine if a value is a FormData
 *
 * @param val  The value to test
 * @returns {boolean}  True if value is an FormData, otherwise false
 */
helper.isFormData = (val) => {
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
};

/**
 * Determine if a value is a String
 *
 * @param val  The value to test
 * @returns {boolean}  True if value is an String, otherwise false
 */
helper.isString = (val) => {
    return toString.call(val) === '[object String]';
};


/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
helper.isNumber = (val) => {
    return typeof val === 'number';
};

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
helper.isUndefined = (val) => {
    return typeof val === 'undefined';
};

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
helper.isObject = (val) => {
    return val !== null && toString.call(val) === '[object Object]';
};

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
helper.isDate = (val) => {
    return toString.call(val) === '[object Date]' && val !== 'Invalid Date';
};

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
helper.isFile = (val) => {
    return toString.call(val) === '[object File]';
};

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
helper.isBlob = (val) => {
    return toString.call(val) === '[object Blob]';
};

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
helper.isFunction = (val) => {
    return toString.call(val) === '[object Function]';
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
helper.isURLSearchParams = (val) => {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
};

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
helper.isStream = (val) => {
    return helper.isObject(val) && helper.isFunction(val.pipe);
};

/**
 * Determine if a value is a RealNumber
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a RealNumber, otherwise false
 */
helper.isRealNumber = (val) => {
    if (val === '' || val == null) {
        return false
    }
    return !isNaN(val)
};

/**
 * Determine if it is the same day
 *
 * @param {Date} preDate The value to test
 * @param {Date} curDate The value to test
 * @returns {boolean} True if value is a RealNumber, otherwise false
 */
helper.isSameDay = (preDate, curDate) => {
    if (!helper.isDate(preDate) || !helper.isDate(curDate)) {
        return false;
    }
    return preDate.getFullYear() === curDate.getFullYear() && preDate.getMonth() === curDate.getMonth() && preDate.getDate() === curDate.getDate();
};

/**
 * Determine if it is the same week
 *
 * @param {Date} preDate The value to test
 * @param {Date} curDate The value to test
 * @returns {boolean} True if value is a RealNumber, otherwise false
 */
helper.isSameWeek = (preDate, curDate) => {
    if (!helper.isDate(preDate) || !helper.isDate(curDate)) {
        return false;
    }
    if (preDate - curDate > 0) {
        [preDate, curDate] = [curDate, preDate];
    }
    let gap = (curDate - preDate) / 86400000;
    return curDate.getDay() >= preDate.getDay() && gap < 7;
};


/**
 * Determine if it is the same month
 *
 * @param {Date} preDate The value to test
 * @param {Date} curDate The value to test
 * @returns {boolean} True if value is a RealNumber, otherwise false
 */
helper.isSameMonth = (preDate, curDate) => {
    if (!helper.isDate(preDate) || !helper.isDate(curDate)) {
        return false;
    }
    return preDate.getFullYear() === curDate.getFullYear() && preDate.getMonth() === curDate.getMonth();
};

/**
 * Determine if a value is a JSONObject
 *
 * @param {String} str The value to test
 * @returns {boolean} True if value is a JSONObject, otherwise false
 */
helper.isJSONObject = (str) => {
    try {
        var o = JSON.parse(str);
        if (o && typeof o === 'object') {
            return o;
        }
    } catch (e) {
        // do nothing
    }
    return false;
};

helper.isEmpty = (val) => {
    // null or undefined
    if (val == null) return true;

    if (typeof val === 'boolean') return false;

    if (typeof val === 'number') return !val;

    if (val instanceof Error) return val.message === '';

    switch (Object.prototype.toString.call(val)) {
        // String or Array
        case '[object String]':
        case '[object Array]':
            return !val.length;

        // Map or Set or File
        case '[object File]':
        case '[object Map]':
        case '[object Set]': {
            return !val.size;
        }
        // Plain Object
        case '[object Object]': {
            return !Object.keys(val).length;
        }
    }

    return false;
};

helper.isEqual = function(value1, value2) {
    if (Array.isArray(value1) && Array.isArray(value2)) {
        return helper.arrayEquals(value1, value2);
    }
    return helper.looseEqual(value1, value2);
};

// ===================================================================================
// ===================================================================================

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
helper.trim = (str) => {
    return str.replace(/^\s*/, '').replace(/\s*$/, '');
};

/**
 * Format time
 *
 * @param {String} format The String to format
 * @returns {String}
 */
helper.timer = (format) => {
    var date = new Date();
    return format ? date.format(format) : date.format('YYYY-MM-DD hh:mm:ss')
};

/**
 * Convert date string to date
 *
 * @param {String} str
 * @returns {Date|*}
 */
helper.parseDate = (str) => {
    if (!str) {
        return str;
    }
    if (helper.isDate(str)) {
        return str;
    } else {
        str = str.replace(/-/g, '/');
        return new Date(str);
    }
};

/**
 * Turn hours into minutes into numbers
 *
 * @param date
 * @param earlier
 * @returns {number}
 */
helper.hmTimeNumber = (date, earlier) => {
    if (helper.isString(date)) {
        try {
            date = helper.parseDate(date);
        } catch (e) {
            return 0;
        }
    }
    if (helper.isDate(date)) {
        if (!earlier || !helper.isNumber(earlier)) {
            earlier = 0;
        }
        return date.getHours() * 100 + (date.getMinutes() - earlier);
    } else {
        return 0;
    }
};

helper.humanReadableFileSize = (bytes, binary = false) => {
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
};

helper.looseEqual = (a, b) => {
    const isObjectA = helper.isObject(a);
    const isObjectB = helper.isObject(b);
    if (isObjectA && isObjectB) {
        return JSON.stringify(a) === JSON.stringify(b);
    } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b);
    } else {
        return false;
    }
};

helper.arrayEquals = (arrayA, arrayB) => {
    arrayA = arrayA || [];
    arrayB = arrayB || [];

    if (arrayA.length !== arrayB.length) {
        return false;
    }

    for (let i = 0; i < arrayA.length; i++) {
        if (!helper.looseEqual(arrayA[i], arrayB[i])) {
            return false;
        }
    }

    return true;
};

helper.keyCodes = Object.freeze({
    enter: 13,
    tab: 9,
    delete: 46,
    esc: 27,
    space: 32,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    end: 35,
    home: 36,
    del: 46,
    backspace: 8,
    insert: 45,
    pageup: 33,
    pagedown: 34
});

helper.convertToUnit = (str, unit = 'px') => {
    if (str == null || str === '') {
        return undefined;
    } else if (isNaN(+str)) {
        return String(str);
    } else {
        return `${Number(str)}${unit}`;
    }
};

helper.debounce = (fn, delay) => {
    let timeoutId = 0;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
};

helper.throttle = (fn, limit) => {
    var throttling = false;
    return function () {
        if (!throttling) {
            throttling = true;
            setTimeout(function () {
                return throttling = false;
            }, limit);
            return fn.apply(void 0, arguments);
        }
    }
};

helper.mergeDeep = (source = {}, target = {}) => {
    for (const key in target) {
        const sourceProperty = source[key];
        const targetProperty = target[key]; // Only continue deep merging if
        // both properties are objects

        if (helper.isObject(sourceProperty) && helper.isObject(targetProperty)) {
            source[key] = helper.mergeDeep(sourceProperty, targetProperty);
            continue;
        }

        source[key] = targetProperty;
    }

    return source;
}

helper.upperFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

if (process.argv.length > 1 && /helper/.test(process.argv[1])) {
    // console.log(helper.isRealNumber(4))
    // console.log(new Date().format('YYYY'))
}
