/**
 *  Create by appleex on 2022/4/19 9:52 上午.
 */
'use strict';

/**
 * Byte size conversion
 *
 * @summary humanReadableFileSize
 * @static
 * @since 1.0.4
 * @category Util
 * @param {number} bytes The value to process.
 * @param {boolean} [binary=false] The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.humanReadableFileSize(1000);
 * // => 1.0 kB
 *
 */
function humanReadableFileSize(bytes, binary = false) {
  const base = binary ? 1024 : 1000;

  if (bytes < base) {
    return `${bytes} B`;
  }

  const prefix = binary ? ['Ki', 'Mi', 'Gi'] : ['k', 'M', 'G'];
  let unit = -1;

  while (Math.abs(bytes) >= base && unit < prefix.length - 1) {
    bytes /= base;
    ++unit;
  }

  return `${bytes.toFixed(1)} ${prefix[unit]}B`;
}

module.exports = humanReadableFileSize;
