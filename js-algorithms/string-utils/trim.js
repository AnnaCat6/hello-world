/**
 * Удаляет пробелы (' ') с начала и конца строки.
 * Внутренние пробелы и другие пробельные символы (\t, \n) не удаляются.
 * @param {string} str - Исходная строка.
 * @returns {string} Строка без пробелов в начале и конце.
 * @throws {TypeError} Если str не является строкой или равен null/undefined.
 */
export function trim(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Аргумент str должен быть строкой');
  }

  let start = 0;
  const len = str.length;

  while (start < len && str[start] === ' ') {
    start++;
  }

  if (start === len) {
    return '';
  }

  let end = len - 1;
  while (end >= 0 && str[end] === ' ') {
    end--;
  }
  return str.slice(start, end + 1);
}