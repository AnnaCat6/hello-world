import { len } from './len.js';
/**
 * Возвращает индекс первого вхождения подстроки в строке, используя ручной перебор.
 * Если подстрока не найдена, возвращает -1.
 * @param {string} str - Строка, в которой выполняется поиск.
 * @param {string} search - Подстрока для поиска.
 * @returns {number} Индекс первого вхождения подстроки; -1, если подстрока не найдена.
 * @throws {TypeError} Если хотя бы один из аргументов не является строкой.
 */
export function indexOf(str, search) {
  if (typeof str !== 'string' || typeof search !== 'string') {
    throw new TypeError('Аргументы должны быть строками!');
  }

  if (len(search) === 0) {
    return 0;
  }

  const strLen = len(str);
  const searchLen = len(search);

  for (let i = 0; i <= strLen - searchLen; i++) {
    let j = 0;

    while (j < searchLen && str[i + j] === search[j]) {
      j++;
    }

    if (j === searchLen) {
      return i;
    }
  }

  return -1;
}