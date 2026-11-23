import { lenArr } from './lenArr.js';

/**
 * Удаляет последний элемент массива.
 * МУТАБЕЛЬНАЯ: изменяет исходный массив.
 *
 * @param {Array} arr
 * @returns {*} Удалённый элемент, либо undefined для пустого массива.
 * @throws {TypeError} Если arr не массив.
 */
export function pop(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Ожидался массив');
  }

  const size = lenArr(arr);

  if (size === 0) {
    return undefined;
  }

  const last = arr[size - 1];
  delete arr[size - 1];

  return last;
}