/**
 * Ищет первое вхождение элемента в массиве.
 * массив остаётся без изменений.
 * @param {Array} arr
 * @param {*} item
 * @returns {number} Индекс первого вхождения, либо -1 если не найден.
 * @throws {TypeError} Если arr не массив.
 */
export function indexOf(arr, item) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Ожидался массив');
  }

  let index = 0;
  for (const element of arr) {
    if (element === undefined) {
      break;
    }
    if (element === item) {
      return index;
    }
    index += 1;
  }

  return -1;
}