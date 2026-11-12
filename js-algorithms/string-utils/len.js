/**
 * Возвращает длину строки, подсчитывая символы вручную
 * @param {string} str - Строка,  длину которую нужно получить
 * @returns {number} Количество символов в строке
 * @throws {TypeError} Если аргумент не является строкой
*/
export function len(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Аргумент должен быть строкой!');
  }

  let count = 0;

  while (str[count] !== undefined) {
    count++;
  }
  
  return count;
}