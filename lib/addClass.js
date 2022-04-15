'use strict';

var hasClass = require('./hasClass');

/**
 * addClass
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
function addClass(ele, className){
  if (!hasClass(ele, className)) { ele.className += ' ' + className; }
}

module.exports = addClass;
