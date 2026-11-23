import { len } from './len.js';

/**
 * Возвращает подстроку с нормализацией границ.
 * - Если str не строка — выбрасывается TypeError.
 * - Если start/end не конечные числа (кроме NaN) — выбрасывается TypeError.
 * - NaN трактуется как отсутствие значения: start = 0, end = len(str).
 * - Отрицательные индексы принудительно становятся 0.
 * - Если после нормализации start > end — индексы меняются местами.
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

  const n = len(str);

  if (Number.isNaN(start)) {
    start = 0;
  }
  if (typeof start !== 'number' || !Number.isFinite(start)) {
    throw new TypeError('Аргумент start должен быть числом');
  }
  if (start < 0) {
    start = 0;
  } else if (start > n) {
    start = n;
  }

  if (end !== undefined && end !== null) {
    if (Number.isNaN(end)) {
      end = n;
    }
    if (typeof end !== 'number' || !Number.isFinite(end)) {
      throw new TypeError('Аргумент end должен быть числом');
    }
    if (end < 0) {
      end = 0;
    } else if (end > n) {
      end = n;
    }
  } else {
    end = n;
  }

  if (start > end) {
    const tmp = start;
    start = end;
    end = tmp;
  }

  let result = '';
  for (let i = start; i < end; i++) {
    result += str[i];
  }
  return result;
}