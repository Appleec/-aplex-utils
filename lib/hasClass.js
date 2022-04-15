'use strict';

/**
 * hasClass
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
function hasClass(ele, className){
  return !!ele.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

module.exports = hasClass;
