/**
 *  Create by appleex on 2022/4/14 10:43 上午.
 */
'use strict';

/**
 * @fileOverview This is base definition for all composed classes defined by the system.
 * @module Function
 *
 * @borrows deepMerge
 * @borrows deepEqual
 * @borrows simpleDeepCopy
 * @borrows deepCopy
 * @borrows debounce
 * @borrows throttle
 * @borrows memoize
 */
module.exports = {
    'memoize': require('./memoize'),
    'deepMerge': require('./deepMerge'),
    'deepEqual': require('./deepEqual'),
    'simpleDeepCopy': require('./simpleDeepCopy'),
    'deepCopy': require('./deepCopy'),
    'throttle': require('./throttle'),
    'debounce': require('./debounce')
};
