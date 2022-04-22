/**
 * Determine if a value is an Prime.
 *
 * @summary isPrime
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isPrime(null);
 * // => true
 */
function isPrime(value) {
  return !/^.?$|^(..+?)\1+$/.test("1".repeat(value));
}

module.exports = isPrime;
