/**
 *  Create by appleex on 2022/4/18 9:52 上午.
 */
'use strict';

/**
 * Get local time
 *
 * @summary currentLocaleTimeString
 * @author appleex <771992522@qq.com>
 * @static
 * @since 1.0.4
 * @category Time
 * @returns {string} Returns the string.
 * @example
 *
 * _.currentLocaleTimeString();
 * // => 14:03:45
 *
 */
function currentLocaleTimeString() {
  return new Date().toLocaleTimeString('en-US', {
    hour12: false
  });
}

module.exports = currentLocaleTimeString;
