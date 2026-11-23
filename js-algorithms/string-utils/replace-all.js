import { len } from './len.js';
import { indexOf } from './index-of.js';
import { slice } from './slice.js';

/**
 * Функция заменяет все вхождения подстроки
 *
 * @param {string} str - строка, в которой идёт замена
 * @param {string} search - искомая подстрока, которая будет заменена
 * @param {string} replacement - строка, на которую будет заменена
 * @returns {string} - строка, все вхождения заменены. Если search не найден, то возвращается str
 * @throws {TypeError} - если любой аргумент не строка
 *
 * @example
 *   replaceAll('hello world', 'hello', 'hi'); // 'hi world'
 *   replaceAll('hello', 'help', 'hhhh');      // 'hello'
 *   replaceAll('banana', 'na', 'ba');         // 'bababa'
 *   replaceAll('hi', 'i', 'ello');            // 'hello'
 *   replaceAll('hello', 'll', '');            // 'heo'
 */
export function replaceAll(str, search, replacement) {
  if (typeof str !== 'string' || typeof search !== 'string' || typeof replacement !== 'string') {
    throw new TypeError('Аргументы должны быть строками');
  }

  const searchLength = len(search);
  if (str === '') return '';
  if (search === '') {
    let out = '';
    for (const char of str) {
      out += replacement + char;
    }
    return out + replacement;
  }

  let result = '';
  let partAfterSearch = str;
  let indexSearch = indexOf(partAfterSearch, search);

  if (indexSearch === -1) return str;
  do {
    const partBeforeSearch = slice(partAfterSearch, 0, indexSearch);
    partAfterSearch = slice(partAfterSearch, indexSearch + searchLength);

    result += partBeforeSearch + replacement;
    indexSearch = indexOf(partAfterSearch, search);

  } while (indexSearch !== -1);
  return result + partAfterSearch;
}