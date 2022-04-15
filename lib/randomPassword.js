'use strict';

var random = require('./random');

/**
 * randomWord
 *
 * @static
 * @since 0.7.0
 * @category Number
 * @returns {number} Returns the random number.
 * @example
 *
 * _.randomWord();
 * // => an integer between 0 and 5
 *
 *
 */
function randomPassword() {
  const source = ['0123456789', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  const pswLength = random(5, 7);
  let psw = '';

  for (let i = 0; i < pswLength; i += 1) {
    const item = source[random(0, 2)];
    psw += item.charAt(random(0, item.length - 1));
  }

  for (let j = 0; j < 3; j += 1) {
    const charac = source[j].charAt(random(0, source[j].length - 1));
    const randomSplit = random(0, source[j].length - 1);
    psw = [psw.slice(0, randomSplit), charac, psw.slice(randomSplit)].join('');
  }

  return psw;
}

module.exports = randomPassword;
