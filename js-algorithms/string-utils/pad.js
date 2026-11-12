import { len } from './len.js';
import { repeat } from './repeat.js';
import { slice } from './slice.js';

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
  if (side !== 'left' && side !== 'right' && side !== 'both') {
    throw new TypeError('Аргумент side должен быть "left", "right" или "both"');
  }

  const currentLen = len(str);
  if (currentLen >= length) {
    return str;
  }

  const paddingLen = length - currentLen;
  const charLen = len(char);
  const getPad = (count) => slice(repeat(char, Math.ceil(count / charLen)), 0, count);

  switch (side) {
    case 'left':
      return getPad(paddingLen) + str;
    case 'right':
      return str + getPad(paddingLen);
    case 'both': {
      const leftLen = Math.floor(paddingLen / 2);
      const rightLen = paddingLen - leftLen;
      return getPad(leftLen) + str + getPad(rightLen);
    }
  }
}