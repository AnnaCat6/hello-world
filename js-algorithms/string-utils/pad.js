/**
 * Дополняет строку символами до заданной длины.
 * @param {string} str - Исходная строка.
 * @param {number} length - Целевая длина.
 * @param {string} char - Строка для дополнения (может быть длиннее 1 символа).
 * @param {'left'|'right'|'both'} side - Сторона: 'left', 'right' или 'both'.
 * @returns {string} Строка, дополненная до длины length.
 * @throws {TypeError} Если str не строка или side неверное.
 */
export function pad(str, length, char, side) {
  if (typeof str !== 'string') {
    throw new TypeError('Аргумент str должен быть строкой');
  }
  if (typeof length !== 'number' || length < 0) {
    throw new TypeError('Аргумент length должен быть неотрицательным числом');
  }
  if (typeof char !== 'string' || char === '') {
    throw new TypeError('Аргумент char должен быть непустой строкой');
  }
  if (!['left', 'right', 'both'].includes(side)) {
    throw new TypeError('Аргумент side должен быть "left", "right" или "both"');
  }

  const currentLen = str.length;
  if (currentLen >= length) {
    return str;
  }

  const paddingLen = length - currentLen;

  // Вспомогательная: сколько символов нужно, и как их получить из char (циклично)
  const getPad = (count) => {
    const repeats = Math.ceil(count / char.length);
    return char.repeat(repeats).slice(0, count);
  };

  switch (side) {
    case 'left':
      return getPad(paddingLen) + str;

    case 'right':
      return str + getPad(paddingLen);

    case 'both':
      const leftLen = Math.floor(paddingLen / 2);
      const rightLen = paddingLen - leftLen; // при нечётном — лишний справа
      return getPad(leftLen) + str + getPad(rightLen);
  }
}