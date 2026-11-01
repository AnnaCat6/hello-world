import { len } from './len.js'
/**
 * Проверяет, заканчивается ли строка заданным суффиксом, используя ручной перебор символов.
 * @param {string} str - Строка, в которой выполняется проверка.
 * @param {string} search - Подстрока (суффикс), которую нужно найти в конце строки.
 * @returns {boolean} true, если строка заканчивается указанной подстрокой; иначе false.
 * @throws {TypeError} Если хотя бы один из аргументов не является строкой.
 */
export function endsWith(str, search) {
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

  const start = strLen - searchLen;

  for (let j = 0; j < searchLen; j++) {
    if (str[start + j] !== search[j]) {
      return false;
    }
  }

  return true;
}