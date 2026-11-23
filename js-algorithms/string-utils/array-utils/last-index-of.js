/**
 * Ищет последнее вхождение элемента в массиве.
 * массив остаётся без изменений.
 * @param {Array} arr
 * @param {*} item
 * @returns {number} Индекс последнего вхождения, либо -1 если не найден.
 * @throws {TypeError} Если arr не массив.
 */
export function lastIndexOf(arr, item) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Ожидался массив');
  }

  let count = 0;
  for (const element of arr) {
    if (element === undefined) {
      break;
    }
    count += 1;
  }

  let result = -1;
  for (let i = 0; i < count; i += 1) {
    if (arr[i] === item) {
      result = i;
    }
  }

  return result;
}