import { describe, test, expect } from 'bun:test';
import { trim } from './trim.js';

test('должна удалить пробелы с обеих сторон: ("  hello  ") → "hello"', () => {
  expect(trim('  hello  ')).toBe('hello');
});

test('должна удалить пробелы только слева: ("  hello") → "hello"', () => {
  expect(trim('  hello')).toBe('hello');
});

test('должна удалить пробелы только справа: ("hello  ") → "hello"', () => {
  expect(trim('hello  ')).toBe('hello');
});

test('должна вернуть строку без изменений, если пробелов нет: ("hello") → "hello"', () => {
  expect(trim('hello')).toBe('hello');
});

test('должна вернуть "" для строки из одних пробелов: ("   ") → ""', () => {
  expect(trim('   ')).toBe('');
});

test('должна вернуть "" для пустой строки: ("") → ""', () => {
  expect(trim('')).toBe('');
});

test('должна сохранить пробелы внутри строки: ("  he llo  ") → "he llo"', () => {
  expect(trim('  he llo  ')).toBe('he llo');
});

test('должна удалить только пробелы, не \\t и \\n: (" \\t hello \\n ") → "\\t hello \\n"', () => {
  // В JS строки: \t и \n — это спецсимволы, пишем их как "\\t" и "\\n" в коде
  const input = ' \t hello \n ';
  const expected = '\t hello \n';
  expect(trim(input)).toBe(expected);
});

test('должна работать с кириллицей: ("  привет  ") → "привет"', () => {
  expect(trim('  привет  ')).toBe('привет');
});

test('должна выбросить TypeError если аргумент не строка: (123) → ошибка', () => {
  expect(() => trim(123)).toThrow(TypeError);
});

test('должна выбросить TypeError если аргумент null', () => {
  expect(() => trim(null)).toThrow(TypeError);
});