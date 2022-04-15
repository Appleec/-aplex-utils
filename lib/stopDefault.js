'use strict';

/**
 * stopDefault
 *
 * @desc 阻止浏览器的默认行为
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
function stopDefault(e) {
  e = e || window.event;
  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}

module.exports = stopDefault;
