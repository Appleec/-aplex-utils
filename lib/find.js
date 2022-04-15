'use strict';

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {array} list The value to process.
 * @param {function} f The value to process.
 * @returns {*} Returns the number.
 * @example
 *
 * _.toUpper(3.2);
 * // => 3.2
 *
 */
function find(list, f) {
  return list.filter(f)[0];
}

module.exports = find;
