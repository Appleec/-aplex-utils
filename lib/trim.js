'use strict';

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @since 1.0.0
 * @category String
 * @param {string} [str=''] The string to trim.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

module.exports = trim;
