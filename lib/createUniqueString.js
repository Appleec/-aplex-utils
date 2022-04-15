'use strict';

/**
 * createUniqueString
 *
 * @static
 * @since 0.7.0
 * @category Function
 * @returns {number} Returns length.
 * @example
 *
 * _.createUniqueString();
 * // => sj9f23pg79g0
 *
 *
 */
function createUniqueString() {
  const timestamp = +new Date() + '';
  const randomNum = parseInt((1 + Math.random()) * 65536) + '';
  return (+(randomNum + timestamp)).toString(32);
}

module.exports = createUniqueString;
