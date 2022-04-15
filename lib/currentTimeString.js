'use strict';

/**
 * currentTimeString
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @returns {string} Returns the number.
 * @example
 *
 * _.toUpper(3.2);
 * // => 3.2
 *
 */
function currentTimeString() {
  return new Date().toLocaleTimeString('en-US', {
    hour12: false
  });
}

module.exports = currentTimeString;
