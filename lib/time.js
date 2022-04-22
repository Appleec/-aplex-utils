/**
 *  Create by appleex on 2022/4/14 10:43 上午.
 */
'use strict';

/**
 * @fileOverview This is base definition for all composed classes defined by the system.
 * @module Time
 *
 * @borrows formatTime
 * @borrows currentLocaleTimeString
 * @borrows currentTime
 * @borrows parseTime
 */
module.exports = {
    'parseTime': require('./parseTime'),
    'formatTimeToHM': require('./formatTimeToHM'),
    'formatTime': require('./formatTime'),
    'currentLocaleTimeString': require('./currentLocaleTimeString'),
    'currentTime': require('./currentTime'),
    'toDate': require('./toDate')
};
