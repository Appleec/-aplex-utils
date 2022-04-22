/**
 *  Create by appleex on 2022/4/20 10:43 上午.
 */
'use strict';


/**
 * Block the browser's default behavior
 *
 * @summary stopDefault
 * @static
 * @since 1.0.4
 * @category Lang
 * @param {*} e The value to process.
 * @example
 *
 * _.stopDefault();
 * // =>
 *
 */
function stopDefault(e) {
  e = e || window.event;
  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}

module.exports = stopDefault;
