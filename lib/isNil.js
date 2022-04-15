/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @since 1.0.4
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 *
 * _.isNil('');
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;
