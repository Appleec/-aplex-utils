/**
 * randomWord
 *
 * @static
 * @since 0.7.0
 * @category Number
 * @param {number} [min=0] The lower bound.
 * @param {number} [max=1] The upper bound.
 * @param {boolean} [randomFlag] Random length.
 * @returns {number} Returns the random number.
 * @example
 *
 * _.randomWord();
 * // => an integer between 0 and 5
 *
 *
 */
function randomWord(randomFlag, min, max) {
  const arr = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ];
  let range = min;
  let str = '';

  // 随机产生
  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min;
  }

  for (let i = 0; i < range; i += 1) {
    const pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }

  return str;
}

module.exports = randomWord;
