import { lenArr } from './lenArr.js';

/**
 * Удаляет первый элемент массива.
 * МУТАБЕЛЬНАЯ: изменяет исходный массив —
 * сдвигает все остальные элементы на одну позицию влево.
 *
 * @param {Array} arr
 * @returns {*} Удалённый первый элемент, либо undefined для пустого массива.
 * @throws {TypeError} Если arr не массив.
 */
export function shift(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Ожидался массив');
  }

  const size = lenArr(arr);

  if (size === 0) {
    return undefined;
  }

  const first = arr[0];

  for (let i = 0; i < size - 1; i += 1) {
    arr[i] = arr[i + 1];
  }

  delete arr[size - 1];

  return first;
}