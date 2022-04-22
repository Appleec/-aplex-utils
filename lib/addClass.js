/**
 *  Create by appleex on 2022/4/14 10:43 上午.
 */
'use strict';

var hasClass = require('./hasClass');

/**
 * Add a class to an element
 *
 * @summary addClass.
 *
 * @requires module:Dom.hasClass
 * @static
 * @since 1.0.0
 * @author appleex <771992522@qq.com>
 * @category Dom
 * @param {HTMLElement} el - HTMLElement.
 * @param {string} className - Class Name.
 * @example
 *
 * var el = "<div></div>"
 *
 * _.addClass(el, 'test');
 * // => "<div class='test'></div>"
 *
 */
function addClass(el, className){
  if (!hasClass(el, className)) { el.className += ' ' + className; }
}

module.exports = addClass;
