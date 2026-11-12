/**
 * Возвращает длину строки через цикл.
 * @param {string} str - Исходная строка.
 * @returns {number} Длина строки.
 * @throws {TypeError} Если str не является строкой.
 */
export function len(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Аргумент str должен быть строкой');
  }

  let count = 0;
  for (const _ of str) {
    count++;
  }
  return count;
}