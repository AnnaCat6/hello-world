import { indexOf } from './index-of.js';

/**
 * Проверяет наличие элемента в массиве.
 * Реализована через композицию: использует indexOf.
 * НЕ МУТИРУЕТ: массив остаётся без изменений.
 *
 * @param {Array} arr
 * @param {*} item
 * @returns {boolean} true если элемент найден, false если нет.
 * @throws {TypeError} Если arr не массив.
 */
export function includes(arr, item) {
  return indexOf(arr, item) !== -1;
}