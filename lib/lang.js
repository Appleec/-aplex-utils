/**
 *  Create by appleex on 2022/4/11 5:13 下午.
 */
'use strict';

/**
 * @fileOverview This is base definition for all composed classes defined by the system.
 * @module Lang
 *
 * @borrows isEmpty
 * @borrows isEmail
 * @borrows isDate
 * @borrows isBlob
 * @borrows isArrayLike
 * @borrows isArrayBuffer
 * @borrows isArray
 * @borrows eq
 * @borrows isEmptyObject
 * @borrows isEqual
 * @borrows isFile
 * @borrows isFloat
 * @borrows isFormData
 * @borrows isFunction
 * @borrows isIdCard
 * @borrows isIE
 * @borrows isJSONObject
 * @borrows isLength
 * @borrows isMobile
 * @borrows isNil
 * @borrows isNumber
 * @borrows isObject
 * @borrows isObjectLike
 * @borrows isPlainObject
 * @borrows isPrime
 * @borrows isRealNumber
 * @borrows isSameDay
 * @borrows isSameMonth
 * @borrows isStream
 * @borrows isSymbol
 * @borrows isTypedArray
 * @borrows isUndefined
 * @borrows isURL
 * @borrows isURLSearchParams
 * @borrows toDate
 * @borrows toFinite
 * @borrows toInteger
 * @borrows toNumber
 * @borrows toPlainObject
 * @borrows toString
 */
module.exports = {
    'toString': require('./toString'),
    'toPlainObject': require('./toPlainObject'),
    'toNumber': require('./toNumber'),
    'toInteger': require('./toInteger'),
    'toFinite': require('./toFinite'),
    'toDate': require('./toDate'),
    'isTypedArray': require('./isTypedArray'),
    'isSymbol': require('./isSymbol'),
    'isPromise': require('./isPromise'),
    'isPlainObject': require('./isPlainObject'),
    'isObjectLike': require('./isObjectLike'),
    'isLength': require('./isLength'),
    'isIdCard': require('./isIdCard'),
    'isFinite': require('./isFinite'),
    'isBuffer': require('./isBuffer'),
    'isArrayLikeObject': require('./isArrayLikeObject'),
    'isArrayLike': require('./isArrayLike'),
    'isArrayBuffer': require('./isArrayBuffer'),
    'eq': require('./eq'),
    'isIE': require('./isIE'),
    'isMobile': require('./isMobile'),
    'isFloat': require('./isFloat'),
    'isEmpty': require('./isEmpty'),
    'isURL': require('./isURL'),
    'isStream': require('./isStream'),
    'isURLSearchParams': require('./isURLSearchParams'),
    'isEmail': require('./isEmail'),
    'isEmptyObject': require('./isEmptyObject'),
    'isFormData': require('./isFormData'),
    'isFunction': require('./isFunction'),
    'isUndefined': require('./isUndefined'),
    'isFile': require('./isFile'),
    'isBlob': require('./isBlob'),
    'isEqual': require('./isEqual'),
    'isSameMonth': require('./isSameMonth'),
    'isSameWeek': require('./isSameWeek'),
    'isSameDay': require('./isSameDay'),
    'isDate': require('./isDate'),
    'isJSONObject': require('./isJSONObject'),
    'isPrime': require('./isPrime'),
    'isArray': require('./isArray'),
    'isObject': require('./isObject'),
    'isString': require('./isString'),
    'isNil': require('./isNil'),
    'isNumber': require('./isNumber'),
    'isRealNumber': require('./isRealNumber')
};
