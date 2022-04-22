'use strict';

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @summary deepEqual
 * @static
 * @since 1.0.4
 * @category Function
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * _.deepEqual({a: 1}, {a: 1});
 * // => true
 *
 * _.deepEqual({a: 1}, {a: 2});
 * // => false
 *
 */
var deepEqual = require('./_baseIsEqual');

// old
function deepEqualOld(a, b) {
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

    return props.every(p => deepEqualOld(a[p], b[p]));
}

module.exports = deepEqual;
