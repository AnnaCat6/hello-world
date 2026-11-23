import { lenArr } from './lenArr.js';

/**
 * Добавляет элемент в начало массива.
 * МУТАБЕЛЬНАЯ: изменяет исходный массив —
 * сдвигает все существующие элементы на одну позицию вправо.
 *
 * @param {Array} arr
 * @param {*} item
 * @returns {number} Новая длина массива.
 * @throws {TypeError} Если arr не массив.
 */
export function unshift(arr, item) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Ожидался массив');
  }

  const size = lenArr(arr);

  for (let i = size; i > 0; i -= 1) {
    arr[i] = arr[i - 1];
  }

  arr[0] = item;

  return size + 1;
}