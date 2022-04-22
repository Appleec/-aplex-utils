/**
 *  Create by appleex on 2022/4/15 11:05 上午.
 */
'use strict';

/**
 * @fileOverview This is base definition for all composed classes defined by the system.
 * @module Util
 *
 * @borrows createUniqueString
 * @borrows byteLength
 * @borrows addCommas
 * @borrows convertToUnit
 * @borrows humanReadableFileSize
 * @borrows keyCodes
 * @borrows randomPassword
 * @borrows randomWord
 */
module.exports = {
    'randomWord': require('./randomWord'),
    'randomPassword': require('./randomPassword'),
    'keyCodes': require('./keyCodes'),
    'createUniqueString': require('./createUniqueString'),
    'byteLength': require('./byteLength'),
    'addCommas': require('./addCommas'),
    'convertToUnit': require('./convertToUnit'),
    'humanReadableFileSize': require('./humanReadableFileSize')
};
