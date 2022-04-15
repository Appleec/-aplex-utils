'use strict';

/**
 * humanReadableFileSize
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {*} bytes The value to process.
 * @param {boolean} binary The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.humanReadableFileSize(3.2);
 * // => 3.2
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
