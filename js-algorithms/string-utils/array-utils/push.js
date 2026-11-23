import { lenArr } from './lenArr.js';

/**
 * Добавляет элемент в конец массива.
 * МУТАБЕЛЬНАЯ: изменяет исходный массив.
 *
 * @param {Array} arr
 * @param {*} item
 * @returns {number} Новая длина массива.
 * @throws {TypeError} Если arr не массив.
 */
export function push(arr, item) {
if (!Array.isArray(arr)) {
    throw new TypeError('Ожидался массив');
  }

  let count = 0;
  for (const item of arr) {
    if (item === undefined) {
      break;
    }
    count += 1;
  }

  return count;
} 