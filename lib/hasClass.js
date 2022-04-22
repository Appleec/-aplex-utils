/**
 *  Create by appleex on 2022/4/18 9:52 上午.
 */
'use strict';

/**
 * hasClass
 *
 * @summary hasClass
 * @static
 * @since 1.0.4
 * @category Dom
 * @param {HTMLElement} el The value is HTMLElement.
 * @param {string} className The value is ClassName.
 * @returns {boolean} True if value is a plain Object, otherwise false.
 * @example
 *
 * var _wrapper = document.querySelector('.wrapper');
 *
 * _.hasClass(_wrapper, 'wrapper');
 * // => true
 *
 */
function hasClass(el, className){
  return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

module.exports = hasClass;
