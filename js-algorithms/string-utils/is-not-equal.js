import { isEqual } from './is-equal.js';
/**
 * Проверяет, не равны ли две строки.
 * @param {string} a - Первая строка.
 * @param {string} b - Вторая строка.
 * @returns {boolean} true, если строки не равны; иначе false.
 * @throws {TypeError} Если хотя бы один из аргументов не является строкой.
 */
export function isNotEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new TypeError('Аргументы должны быть строками!');
  }
  return !isEqual(a, b);
}