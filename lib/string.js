/**
 *  Create by appleex on 2022/4/15 10:32 上午.
 */
'use strict';

/**
 * @fileOverview This is base definition for all composed classes defined by the system.
 * @module String
 *
 * @borrows toUpperFirst
 * @borrows toLowerFirst
 * @borrows trim
 */
module.exports = {
    'toUpper': require('./toUpper'),
    'toLowerFirst': require('./toLowerFirst'),
    'toUpperFirst': require('./toUpperFirst'),
    'trim': require('./trim')
};
