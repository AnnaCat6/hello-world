/**
 * Проверяет, является ли первая строка лексикографически больше второй,
 * используя ручной посимвольный перебор.
 * @param {string} a - Первая строка.
 * @param {string} b - Вторая строка.
 * @returns {boolean} true, если a > b лексикографически; иначе false.
 * @throws {TypeError} Если хотя бы один из аргументов не является строкой.
 */
export function isMore(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new TypeError('Аргументы должны быть строками!');
  }
  
let i = 0;

 while (a[i] !== undefined && b[i] !== undefined) {
    if (a[i] > b[i]) {
      return true;
    }
    if (a[i] < b[i]) {
      return false;
    }
    i++;
  }

  return a[i] !== undefined && b[i] === undefined;
}