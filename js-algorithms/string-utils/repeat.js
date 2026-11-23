import { len } from './len.js';
/**
 * Возвращает строку, повторённую указанное количество раз, используя ручной перебор.
 * @param {string} str - Строка, которую нужно повторить.
 * @param {number} count - Количество повторений. Должно быть неотрицательным целым числом.
 * @returns {string} Новая строка, состоящая из повторённой исходной строки.
 * @throws {TypeError} Если первый аргумент не является строкой или второй аргумент не является числом.
 * @throws {RangeError} Если количество повторений отрицательное.
 */

export function repeat(str, count) {
  if (typeof str !== 'string') {
    throw new TypeError('Первый аргумент должен быть строкой!');
  }

  if (count === undefined) {
    return '';
  }

  if (typeof count !== 'number' || Number.isNaN(count)) {
    throw new TypeError('Второй аргумент должен быть числом!');
  }

  if (count < 0) {
    throw new RangeError('Количество повторений не может быть отрицательным!');
  }

  const times = count | 0;

  if (times === 0 || len(str) === 0) {
    return '';
  }

  let result = '';
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
}