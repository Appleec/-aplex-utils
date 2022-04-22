/**
 *  Create by appleex on 2022/4/20 10:32 上午.
 */
'use strict';

/**
 * throttle
 *
 * @summary throttle
 * @static
 * @since 1.0.0
 * @category Function
 * @param {function} fn The value to process.
 * @param {number} limit The value to process.
 * @returns {function} Returns the number.
 * @example
 *
 * _.throttle();
 * // =>
 *
 */
function throttle(fn, limit) {
  var throttling = false;
  return function () {
    if (!throttling) {
      throttling = true;
      setTimeout(function () {
        return throttling = false;
      }, limit);
      return fn.apply(void 0, arguments);
    }
  };
}

module.exports = throttle;
