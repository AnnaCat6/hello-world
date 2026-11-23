/**
 * Считает элементы массива
 * @param {Array} arr
 * @returns {number} Количество элементов.
 * @throws {TypeError} Если arr не массив.
 */
export function lenArr(arr) {
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