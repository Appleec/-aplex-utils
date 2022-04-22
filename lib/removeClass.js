/**
 *  Create by appleex on 2022/4/20 11:05 上午.
 */
'use strict';

var hasClass = require('./hasClass');

/**
 * removeClass
 *
 * @summary removeClass
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {HTMLElement} el The value to process.
 * @param {string} className The value to process.
 * @example
 *
 * _.removeClass('test');
 * // =>
 *
 */
function removeClass(el, className){
  if (hasClass(el, className)) {
    const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
  }
}

module.exports = removeClass;
