import { len } from './len.js';
import { indexOf } from './index-of.js';
/**
 * Проверяет, содержится ли подстрока в строке, используя ручной перебор.
 * @param {string} str - Строка, в которой выполняется поиск.
 * @param {string} search - Подстрока для поиска.
 * @returns {boolean} true, если подстрока найдена; иначе false.
 * @throws {TypeError} Если хотя бы один из аргументов не является строкой.
 */

export function includes(str, search) {
  if (typeof str !== 'string' || typeof search !== 'string') {
    throw new TypeError('Аргументы должны быть строками');
  }
  return indexOf(str, search) !== -1;
}