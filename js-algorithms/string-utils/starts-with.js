import { len } from './len.js';
/**
 * Проверяет, начинается ли строка с заданной подстроки, используя ручной перебор символов.
 * @param {string} str - Строка, в которой выполняется проверка.
 * @param {string} search - Подстрока (префикс), которую нужно найти в начале строки.
 * @returns {boolean} true, если строка начинается с указанной подстроки; иначе false.
 * @throws {TypeError} Если хотя бы один из аргументов не является строкой.
 */
export function startsWith(str, search) {
  if (typeof str !== 'string' || typeof search !== 'string') {
    throw new TypeError('Аргументы должны быть строками!');
  }

  if (search === '') {
    return true;
  }

  const strLen = len(str);
  const searchLen = len(search);

  if (searchLen > strLen) {
    return false;
  }

  for (let j = 0; j < searchLen; j++) {
    if (str[j] !== search[j]) {
      return false;
    }
  }

  return true;
}
