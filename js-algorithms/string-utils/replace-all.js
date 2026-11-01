/**
 * Заменяет все вхождения подстроки search на replacement.
 * Поиск продолжается после вставленного replacement (без рекурсии).
 * Особый случай: если search === '', то replacement вставляется между каждым символом,
 * а также в начало и конец строки. Например: 'abc', '', 'X' → 'XaXbXcX'.
 * @param {string} str - Исходная строка.
 * @param {string} search - Подстрока, которую ищем.
 * @param {string} replacement - Строка, на которую заменяем.
 * @returns {string} Строка со всеми заменами.
 * @throws {TypeError} Если любой из аргументов не является строкой.
 */
export function replaceAll(str, search, replacement) {
  if ([str, search, replacement].some(v => typeof v !== 'string')) {
    throw new TypeError('Все аргументы должны быть строками');
  }

  if (search === '') {
    return str === '' ? '' : replacement + str.split('').join(replacement) + replacement;
  }

  let result = '';
  let lastIndex = 0;

  for (let index; (index = str.indexOf(search, lastIndex)) !== -1; ) {
    result += str.slice(lastIndex, index) + replacement;
    lastIndex = index + search.length;
  }

  return result + str.slice(lastIndex);
}