/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */

 /**
 * Checks if `value` is classified as an `ArrayBuffer` object.
 *
 * @since 1.0.0
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArrayBuffer(new ArrayBuffer());
 * // => true
 *
 * _.isArrayBuffer('abc');
 * // => false
 *
 */
function isArrayBuffer(value) {
    return Object.prototype.toString.call(value) === '[object ArrayBuffer]';
}

module.exports = isArrayBuffer;

// eslint-disable-next-line no-undef
// if (process.argv.length > 1 && /isArrayBuffer/.test(process.argv[1])) {
//     console.log(isArrayBuffer(new ArrayBuffer()));
//     console.log(isArrayBuffer('abc'));
// }
