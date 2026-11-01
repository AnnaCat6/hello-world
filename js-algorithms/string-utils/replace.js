/**
 * Заменяет первое вхождение подстроки search на replacement.
 * Если search не найден — возвращает исходную строку.
 * @param {string} str - Исходная строка.
 * @param {string} search - Подстрока, которую ищем.
 * @param {string} replacement - Строка, на которую заменяем.
 * @returns {string} Строка с заменённым первым вхождением.
 * @throws {TypeError} Если любой из аргументов не является строкой.
 */
export function replace(str, search, replacement) {
  if (typeof str !== 'string' || typeof search !== 'string' || typeof replacement !== 'string') {
    throw new TypeError('Все аргументы должны быть строками');
  }

  if (search === '') {
    return str;
  }

  const index = str.indexOf(search);
  if (index === -1) {
    return str;
  }

  return str.slice(0, index) + replacement + str.slice(index + search.length);
}
