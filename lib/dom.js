/**
 *  Create by appleex on 2022/4/14 10:43 上午.
 */
'use strict';

/**
 * @fileOverview This is base definition for all composed classes defined by the system.
 * @module Dom
 *
 * @borrows stopBubble
 * @borrows downloadFile
 * @borrows smoothScrollTo
 * @borrows toggleFullScreen
 * @borrows toggleClass
 * @borrows hasClass
 * @borrows removeClass
 * @borrows addClass
 */
module.exports = {
    'stopDefault': require('./stopDefault'),
    'stopBubble': require('./stopBubble'),
    'downloadFile': require('./downloadFile'),
    'smoothScrollTo': require('./smoothScrollTo'),
    'toggleFullScreen': require('./toggleFullScreen'),
    'toggleClass': require('./toggleClass'),
    'removeClass': require('./removeClass'),
    'hasClass': require('./hasClass'),
    'addClass': require('./addClass')
};
