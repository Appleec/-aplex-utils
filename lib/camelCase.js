/**
 *  Create by appleex on 2022/4/22 3:58 下午.
 */
'use strict';

// eslint-disable-next-line no-useless-escape
var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;

/**
 * camelCase
 *
 * @summary camelCase
 * @since 2.0.0
 * @param {string} name
 * @return {string}
 * @example
 *
 * _.camelCase('ab-c');
 * // => abC
 *
 * _.camelCase('ab_c');
 * // => abC
 *
 * _.camelCase('ab:c');
 * // => abC
 *
 */
function camelCase(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}

module.exports = camelCase;
