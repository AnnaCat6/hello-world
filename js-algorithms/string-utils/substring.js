/**
 * Возвращает подстроку с нормализацией границ.
 *
 * Поведение:
 * - Если str не строка — выбрасывается TypeError.
 * - Если start/end не конечные числа (кроме NaN) — выбрасывается TypeError.
 * - NaN трактуется как отсутствие значения: start = 0, end = str.length.
 * - Отрицательные индексы принудительно становятся 0.
 * - Если после нормализации start > end — индексы меняются местами.
 *
 * @param {string} str - Исходная строка.
 * @param {number} start - Начальный индекс (может быть отрицательным, NaN).
 * @param {number} [end] - Конечный индекс (может быть отрицательным, NaN; необязательный).
 * @returns {string} Подстрока согласно правилам задания.
 * @throws {TypeError} Если str не является строкой или start/end не являются конечными числами.
 */
export function substring(str, start, end) {
  if (typeof str !== 'string') {
    throw new TypeError('Аргумент str должен быть строкой');
  }

  if (Number.isNaN(start)) {
    start = 0;
  }
  if (typeof start !== 'number' || !Number.isFinite(start)) {
    throw new TypeError('Аргумент start должен быть числом');
  }
  if (start < 0) {
    start = 0;
  }

  if (end !== undefined && end !== null) {
    if (Number.isNaN(end)) {
      end = str.length;
    }
    if (typeof end !== 'number' || !Number.isFinite(end)) {
      throw new TypeError('Аргумент end должен быть числом');
    }
    if (end < 0) {
      end = 0;
    }
  } else {
    end = str.length;
  }

  if (start > end) {
    const tmp = start;
    start = end;
    end = tmp;
  }
  return str.slice(start, end);
}