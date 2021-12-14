/**
 *  Create by appleex on 2021/10/15 10:01 上午.
 */
"use strict";

/**
 * @fileOverview This is base definition for all composed classes defined by the system
 * @module is
 * @requires helper
 */

var ex = module.exports;

// ------------------------------------- String
/**
 * Determine if a value is a String
 *
 * @param {*} val  - The value to test
 * @returns {boolean}  True if value is an String, otherwise false
 */
function isString (val) {
    return Object.prototype.toString.call(val) === '[object String]';
}

// ------------------------------------- Array
/**
 * Determine if a value is an Array
 *
 * @param {*} val - any
 * @return {boolean} true/false
 * @example
 * isArray(null)
 * // return false
 *
 * isArray(undefined)
 * // return false
 * // ...
 */
function isArray(val) {
    return Object.prototype.toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val - any
 * @return {boolean} true/false
 * @example
 * isArrayBuffer(null)
 * // return false
 *
 * isArrayBuffer(undefined)
 * // return false
 * // ...
 */
function isArrayBuffer(val) {
    return Object.prototype.toString.call(val) === '[object ArrayBuffer]';
}

// ------------------------------------- Number
/**
 * Determine if a value is a Number
 *
 * @param {Object} val - The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
    return typeof val === 'number';
}

/**
 * Determine if a value is a RealNumber
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a RealNumber, otherwise false
 */
function isRealNumber(val) {
    if (val === '' || val == null) {
        return false;
    }
    return !isNaN(val);
}

/**
 * Determine if a value is an Prime
 *
 * @param {*} n - any
 * @returns {Boolean} true/false
 * @example
 * isPrime(11)
 * // return true
 */
function isPrime(n) {
    return !/^.?$|^(..+?)\1+$/.test("1".repeat(n));
}

// ------------------------------------- Object
/**
 * Determine if a value is an Object
 *
 * @param {*} val - any
 * @return {Boolean} true/false
 */
function isObject(val) {
    // Judgment is a pure object (not an array, not a function)
    // return !!(val && typeof val === "object" && val.toString === "[object Object]");
    return val !== null && Object.prototype.toString.call(val) === '[object Object]';
}

/**
 * Determine if a value is a JSONObject
 *
 * @param {String} str The value to test
 * @returns {boolean} True if value is a JSONObject, otherwise false
 */
function isJSONObject(str) {
    try {
        var o = JSON.parse(str);
        if (o && typeof o === 'object') {
            return o;
        }
    } catch (e) {
        // do nothing
    }
    return false;
}

// ------------------------------------- Time
/**
 * Determine if a value is a Date
 *
 * @param {Object} val - The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
    return Object.prototype.toString.call(val) === '[object Date]' && val !== 'Invalid Date';
}

/**
 * Determine if it is the same day
 *
 * @param {Date} preDate The value to test
 * @param {Date} curDate The value to test
 * @returns {boolean} True if value is a RealNumber, otherwise false
 */
function isSameDay(preDate, curDate) {
    if (!this.isDate(preDate) || !this.isDate(curDate)) {
        return false;
    }
    return preDate.getFullYear() === curDate.getFullYear() && preDate.getMonth() === curDate.getMonth() && preDate.getDate() === curDate.getDate();
}

/**
 * Determine if it is the same week
 *
 * @param {Date} preDate The value to test
 * @param {Date} curDate The value to test
 * @returns {boolean} True if value is a RealNumber, otherwise false
 */
function isSameWeek(preDate, curDate) {
    if (!this.isDate(preDate) || !this.isDate(curDate)) {
        return false;
    }
    if (preDate - curDate > 0) {
        [preDate, curDate] = [curDate, preDate];
    }
    let gap = (curDate - preDate) / 86400000;
    return curDate.getDay() >= preDate.getDay() && gap < 7;
}

/**
 * Determine if it is the same month
 *
 * @param {Date} preDate The value to test
 * @param {Date} curDate The value to test
 * @returns {boolean} True if value is a RealNumber, otherwise false
 */
function isSameMonth(preDate, curDate) {
    if (!this.isDate(preDate) || !this.isDate(curDate)) {
        return false;
    }
    return preDate.getFullYear() === curDate.getFullYear() && preDate.getMonth() === curDate.getMonth();
}


// ------------------------------------- Other
function isEqual(value1, value2) {
    if (Array.isArray(value1) && Array.isArray(value2)) {
        return this.isArrayEquals(value1, value2);
    }
    return this.isLooseEqual(value1, value2);
}

function isLooseEqual(a, b) {
    const isObjectA = this.isObject(a);
    const isObjectB = this.isObject(b);
    if (isObjectA && isObjectB) {
        return JSON.stringify(a) === JSON.stringify(b);
    } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b);
    } else {
        return false;
    }
}

function isArrayEquals(arrayA, arrayB) {
    arrayA = arrayA || [];
    arrayB = arrayB || [];

    if (arrayA.length !== arrayB.length) {
        return false;
    }

    for (let i = 0; i < arrayA.length; i++) {
        if (!this.isLooseEqual(arrayA[i], arrayB[i])) {
            return false;
        }
    }

    return true;
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
    return Object.prototype.toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
    return Object.prototype.toString.call(val) === '[object File]';
}

/**
 * Determine if a value is Undefined
 *
 * @param {Object} val - The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
    return typeof val === 'undefined';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction (val) {
    return Object.prototype.toString.call(val) === '[object Function]';
};

/**
 * Determine if a value is an FormData
 *
 * @param {*} val - any
 * @return {Boolean} true/false
 * @example
 * isFormData()
 * // return true
 */
function isFormData (val) {
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * @desc    判断对象是否为空
 * @function
 * @summary 判断对象是否为空
 * @param   {*} args - 传入任意参数
 * @returns {Boolean} true or false
 * @example
 * isEmptyObject({ a: 1 })
 * // return false
 */
function isEmptyObject(args) {
    // method: 1
    // for (const t in e) {
    //     return !1;
    // }
    // return !0;

    // method: 2
    if (!args || typeof args !== "object" || Array.isArray(args)) return false;
    return !Object.keys(args).length;
}

/**
 * @desc    判断是否为邮箱地址
 * @param   {String}  str - 邮箱地址
 * @return  {Boolean}
 * @example
 * isEmail('12345@qq.com')
 * // return true
 */
function isEmail(str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

/**
 * @desc    判断是否为身份证号
 * @param   {String} code - 身份证号
 * @return  {Object} 包括返回结果的状态及提示信息
 */
function isIdCard(code) {
    // return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);
    let city = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江 ",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北 ",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏 ",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外 ",
    };
    let tip = "";
    let pass = true;
    if (
        !code ||
        !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)
    ) {
        tip = "身份证号格式错误";
        pass = false;
    } else if (!city[code.substr(0, 2)]) {
        tip = "地址编码错误";
        pass = false;
    } else {
        //18位身份证需要验证最后一位校验位
        if (code.length == 18) {
            code = code.split("");
            //∑(ai×Wi)(mod 11)
            //加权因子
            let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            //校验位
            let parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
            let sum = 0;
            let ai = 0;
            let wi = 0;
            for (let i = 0; i < 17; i++) {
                ai = code[i];
                wi = factor[i];
                sum += ai * wi;
            }
            if (parity[sum % 11] != code[17]) {
                tip = "校验位错误";
                pass = false;
            }
        }
    }
    return { pass, tip };
}

/**
 * @desc    判断是否为手机号
 * @param   {String} str - 手机号的数值型或者字符串
 * @return  {Boolean}
 */
function isPhoneNum(str) {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val - The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
    return this.isObject(val) && this.isFunction(val.pipe);
}

/**
 * @desc    判断是否为URL地址
 * @param   {String} str - URL地址
 * @return  {Boolean}
 */
function isUrl(str) {
    // eslint-disable-next-line no-useless-escape
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
}

/**
 * isEmpty
 *
 * @param val
 * @return {boolean}
 */
function isEmpty(val) {
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
}

ex.isUndefined = isUndefined;
ex.isNumber = isNumber;
ex.isString = isString;
ex.isArray = isArray;
ex.isObject = isObject;
ex.isDate = isDate;
ex.isFunction = isFunction;

ex.isSameDay = isSameDay;
ex.isSameWeek = isSameWeek;
ex.isSameMonth = isSameMonth;
ex.isRealNumber = isRealNumber;
ex.isPrime = isPrime;
ex.isEqual = isEqual;
ex.isLooseEqual = isLooseEqual;
ex.isArrayEquals = isArrayEquals;
ex.isArrayBuffer = isArrayBuffer;
ex.isEmptyObject = isEmptyObject;
ex.isJSONObject = isJSONObject;
ex.isFormData = isFormData;
ex.isEmpty = isEmpty;
ex.isFile = isFile;
ex.isBlob = isBlob;
ex.isUrl = isUrl;
ex.isURLSearchParams = isURLSearchParams;
ex.isStream = isStream;
ex.isPhoneNum = isPhoneNum;
ex.isIdCard = isIdCard;
ex.isEmail = isEmail;

// eslint-disable-next-line no-undef
if (process.argv.length > 1 && /is/.test(process.argv[1])) {
    // console.log(isEmptyObject({ a: 1}));
    // console.log(ex.isPrime(14));
    // console.log(ex.isArray(null));
    // console.log(ex.isStream(null));
}

