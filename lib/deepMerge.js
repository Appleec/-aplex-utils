'use strict';

var isObject = require('./isObject')

/**
 * deepMerge
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {object} source The value to process.
 * @param {object} target The value to process.
 * @returns {function} Returns the number.
 * @example
 *
 * _.toUpper(3.2);
 * // => 3.2
 *
 */
function deepMerge(source = {}, target = {}) {
  for (const key in target) {
    const sourceProperty = source[key];
    const targetProperty = target[key]; // Only continue deep merging if
    // both properties are objects

    if (isObject(sourceProperty) && isObject(targetProperty)) {
      source[key] = deepMerge(sourceProperty, targetProperty);
      continue;
    }

    source[key] = targetProperty;
  }

  return source;
}

module.exports = deepMerge;
