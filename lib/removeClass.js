'use strict';

var hasClass = require('./hasClass');

/**
 * removeClass
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {HTMLElement} ele The value to process.
 * @param {string} className The value to process.
 * @returns {string} Returns the number.
 * @example
 *
 * _.toUpper(3.2);
 * // => 3.2
 *
 */
function removeClass(ele, className){
  if (hasClass(ele, className)) {
    const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
}

module.exports = removeClass;
