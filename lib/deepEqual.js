'use strict';

/**
 * deepEqual
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {*} a - any
 * @param {*} b - any
 * @returns {boolean} Returns the number.
 * @example
 *
 * _.toUpper(3.2);
 * // => 3.2
 *
 */
function deepEqual(a, b) {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) {
    if (a.getTime() !== b.getTime()) return false;
  }

  if (a !== Object(a) || b !== Object(b)) {
    return false;
  }

  const props = Object.keys(a);
  if (props.length !== Object.keys(b).length) {
    return false;
  }

  return props.every(p => deepEqual(a[p], b[p]));
}

module.exports = deepEqual;
