import { len } from './len.js';

/**
 * Переводит заглавные буквы в строчные через коды символов.
 * Работает для латиницы ('A'–'Z') и кириллицы ('А'–'Я').
 * Остальные символы не меняются.
 * @param {string} str - Исходная строка.
 * @returns {string} Строка с переведёнными заглавными буквами.
 * @throws {TypeError} Если str не является строкой.
 */

export function lowerCase(str) {
  if (typeof str !== 'string') throw new TypeError('Аргумент str должен быть строкой');
  let result = '';
  for (let i = 0; i < len(str); i++) {
    const c = str.charCodeAt(i);
    result += (c >= 65 && c <= 90) || (c >= 1040 && c <= 1071)
      ? String.fromCodePoint(c + 32)
      : c === 1025 ? String.fromCodePoint(1105)
      : str[i];
  }
  return result;
}
