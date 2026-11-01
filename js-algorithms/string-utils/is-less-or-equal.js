/**
 * Проверяет, является ли первая строка лексикографически меньше или равна второй.
 * @param {string} a - Первая строка.
 * @param {string} b - Вторая строка.
 * @returns {boolean} true, если a <= b лексикографически; иначе false.
 * @throws {TypeError} Если хотя бы один из аргументов не является строкой.
 */
export function isLessOrEqual(a, b) {
    if (typeof a !== 'string' || typeof b !== 'string') {
    throw new TypeError('Аргументы должны быть строками!');
  }
  
let i = 0;

while (a[i] !== undefined && b[i] !== undefined) {
  if (a.charCodeAt(i) < b.charCodeAt(i)) {
    return true;
  } 
  if (a.charCodeAt(i) > b.charCodeAt(i)) {
    return false;
  }
  i++;
  } 
  if (a[i] === undefined) {
    return true;
  } else {
    return false;
  }
}
