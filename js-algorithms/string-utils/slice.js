/**
 * Извлекает подстроку с поддержкой отрицательных индексов.
 *
 * Поведение:
 * - Если str не строка — выбрасывается TypeError.
 * - Если start не число — выбрасывается TypeError.
 * - Если end передан и не число — выбрасывается TypeError.
 * - Отрицательные индексы: -1 = последний символ, -len = первый.
 * - Если end не передан — до конца строки.
 * - start и end НЕ меняются местами (в отличие от substring).
 * - Возвращает пустую строку, если start >= end после нормализации или за границами.
 *
 * @param {string} str - Исходная строка.
 * @param {number} start - Начальный индекс (включая). Может быть отрицательным.
 * @param {number} [end] - Конечный индекс (не включая). Может быть отрицательным, необязательный.
 * @returns {string} Подстрока согласно правилам.
 * @throws {TypeError} Если типы аргументов неверны.
 */
export function slice(str, start, end) {
  // Заглушка: пока просто используем нативный slice, чтобы тесты начали проходить
  if (typeof str !== 'string') {
    throw new TypeError('Аргумент str должен быть строкой');
  }
  if (typeof start !== 'number') {
    throw new TypeError('Аргумент start должен быть числом');
  }
  if (end !== undefined && typeof end !== 'number') {
    throw new TypeError('Аргумент end должен быть числом');
  }

  return str.slice(start, end);
}