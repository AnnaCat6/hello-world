/**
 * Переводит строчные буквы в заглавные через коды символов.
 * Работает для латиницы ('a'–'z') и кириллицы ('а'–'я').
 * Остальные символы не меняются.
 * @param {string} str - Исходная строка.
 * @returns {string} Строка с переведёнными строчными буквами.
 * @throws {TypeError} Если str не является строкой.
 */
export function upperCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Аргумент str должен быть строкой');
  }

  const result = [];
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    if (code >= 97 && code <= 122) {
      result.push(String.fromCodePoint(code - 32));
      continue;
    }

    if (code >= 1072 && code <= 1103) {
      result.push(String.fromCodePoint(code - 32));
      continue;
    }

    result.push(str[i]);
  }

  return result.join('');
}
