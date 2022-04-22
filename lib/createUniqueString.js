/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
'use strict';

/**
 * Create a unique string
 *
 * @summary createUniqueString
 * @author appleex <771992522@qq.com>
 * @static
 * @since 1.0.4
 * @category Util
 * @returns {string} Returns length.
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
