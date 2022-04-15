'use strict';

/**
 * stopBubble
 *
 * @desc 阻止浏览器的冒泡行为
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {*} e The value to process.
 * @returns {string} Returns the number.
 * @example
 *
 * _.toUpper(3.2);
 * // => 3.2
 *
 */
function stopBubble(e) {
  e = e || window.event;
  e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
}

module.exports = stopBubble;
