import { len } from './len.js';
import { substring } from './substring.js';

/**
 * Удаляет пробелы (' ') с начала и конца строки.
 * Внутренние пробелы и другие пробельные символы (\t, \n) не удаляются.
 * @param {string} str - Исходная строка.
 * @returns {string} Строка без пробелов в начале и конце.
 * @throws {TypeError} Если str не является строкой или равен null/undefined.
 */
export function trim(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Аргумент str должен быть строкой');
  }

  const n = len(str);
  let start = 0;
  while (start < n && str[start] === ' ') {
    start++;
  }

  if (start === n) {
    return '';
  }

  let end = n - 1;
  while (end >= 0 && str[end] === ' ') {
    end--;
  }
  return substring(str, start, end + 1);
}