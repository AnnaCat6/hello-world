import { len } from './len.js';
/**
 * Возвращает строку с обратным порядком символов, используя ручной перебор.
 * @param {string} str - Строка, которую нужно развернуть.
 * @returns {string} Новая строка с символами в обратном порядке.
 * @throws {TypeError} Если аргумент не является строкой.
 */
export function reverse (str) {
  if (typeof str !== 'string') {
    throw new TypeError('Аргумент должен быть строкой!');
  }

  const strLen = len(str);
  let result = '';

  for (let i = strLen - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}