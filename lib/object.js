/**
 *  Create by appleex on 2022/4/18 10:43 上午.
 */
'use strict';

/**
 * @fileOverview This is base definition for all composed classes defined by the system.
 * @module Object
 *
 * @borrows has
 * @borrows get
 * @borrows keys
 * @borrows keysIn
 */
module.exports = {
    'keysIn': require('./keysIn'),
    'keys': require('./keys'),
    'has': require('./has'),
    'get': require('./get')
};
