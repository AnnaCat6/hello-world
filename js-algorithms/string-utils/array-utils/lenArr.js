/**
 * Считает элементы массива. length запрещён
 * @param {array} arr — массив элементов
 * @returns {number} — количество элементов
 * @throws {TypeError} — если arr не массив
 */
export function len(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('аргумент должен быть массивом');
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