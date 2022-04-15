'use strict';

/**
 * toggleClass
 * @desc Toggle class for the selected element
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
