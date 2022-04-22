/**
 *  Create by appleex on 2022/4/20 10:43 上午.
 */
'use strict';

/**
 * Stop the browser's bubbling behavior
 *
 * @summary stopBubble
 * @static
 * @since 1.0.4
 * @category Dom
 * @param {*} e The value to process.
 * @example
 *
 * _.stopBubble();
 * // =>
 *
 */
function stopBubble(e) {
  e = e || window.event;
  e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
}

module.exports = stopBubble;
