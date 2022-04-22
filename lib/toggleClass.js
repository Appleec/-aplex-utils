/**
 *  Create by appleex on 2022/4/20 5:13 下午.
 */
'use strict';

/**
 * Toggle class for the selected element
 *
 * @summary toggleClass
 * @static
 * @since 1.0.4
 * @category Dom
 * @param {HTMLElement} ele The value to process.
 * @param {string} className The value to process.
 * @example
 *
 * _.toggleClass();
 * // =>
 *
 */
function toggleClass(ele, className){
  if (!ele || !className) {
    return;
  }
  let classString = ele.className;
  const nameIndex = classString.indexOf(className);
  if (nameIndex === -1) {
    classString += '' + className;
  } else {
    classString =
        classString.substr(0, nameIndex) +
        classString.substr(nameIndex + className.length);
  }
  ele.className = classString;
}

module.exports = toggleClass;
