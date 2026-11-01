/**
 * Переводит заглавные буквы в строчные через коды символов.
 * Работает для латиницы ('A'–'Z') и кириллицы ('А'–'Я').
 * Остальные символы не меняются.
 * @param {string} str - Исходная строка.
 * @returns {string} Строка с переведёнными заглавными буквами.
 * @throws {TypeError} Если str не является строкой.
 */
export function lowerCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Аргумент str должен быть строкой');
  }

  const result = [];
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      result.push(String.fromCodePoint(code + 32));
      continue;
    }

    if (code >= 1040 && code <= 1071) {
      result.push(String.fromCodePoint(code + 32));
      continue;
    }

    result.push(str[i]);
  }

  return result.join('');
}