import { len } from './len.js';

/**
 * Переводит строчные буквы в заглавные через коды символов.
 * Латиница a–z, кириллица а–я и ё.
 * Остальные символы не меняются.
 * @param {string} str - Исходная строка.
 * @returns {string} Строка с переведёнными в верхний регистр буквами.
 * @throws {TypeError} Если str не является строкой.
 */
export function upperCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Аргумент str должен быть строкой');
  }

  const n = len(str);
  let result = '';

  for (let i = 0; i < n; i++) {
    const code = str.charCodeAt(i);
    
    if ((code >= 97 && code <= 122) || (code >= 1072 && code <= 1103)) {
      result += String.fromCodePoint(code - 32);
    } else if (code === 1105) {
      result += String.fromCodePoint(1025);
    } else {
      result += str[i];
    }
  }

  return result;
}