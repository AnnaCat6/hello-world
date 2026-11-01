import { len } from './len.js';
/**
 * Проверяет, содержится ли подстрока в строке, используя ручной перебор.
 * @param {string} str - Строка, в которой выполняется поиск.
 * @param {string} search - Подстрока для поиска.
 * @returns {boolean} true, если подстрока найдена; иначе false.
 * @throws {TypeError} Если хотя бы один из аргументов не является строкой.
 */
export function includes(str, search) {
  if (typeof str !== 'string' || typeof search !== 'string') {
    throw new TypeError('Аргументы должны быть строками!');
  }
  if (search === '' || len(search) > len(str)) return search === '';

  const strLen = len(str);
  const searchLen = len(search);

  for (let i = 0; i <= strLen - searchLen; i++) {
    let j = 0;
    while (j < searchLen && str[i + j] === search[j]) j++;
    if (j === searchLen) return true;
  }

  return false;
}