'use strict';

/**
 * throttle
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {function} fn The value to process.
 * @param {number} limit The value to process.
 * @returns {function} Returns the number.
 * @example
 *
 * _.toUpper(3.2);
 * // => 3.2
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
