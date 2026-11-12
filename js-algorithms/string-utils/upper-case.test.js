import { describe, test, expect } from 'bun:test';
import { upperCase } from './upper-case.js';

test('должна перевести все строчные латинские: ("hello") → "HELLO"', () => {
  expect(upperCase('hello')).toBe('HELLO');
});

test('должна оставить заглавные без изменений: ("HELLO") → "HELLO"', () => {
  expect(upperCase('HELLO')).toBe('HELLO');
});

test('должна работать со смешанным регистром: ("Hello World") → "HELLO WORLD"', () => {
  expect(upperCase('Hello World')).toBe('HELLO WORLD');
});

test('должна не трогать пробелы: (" hello 123") → " HELLO 123"', () => {
  expect(upperCase(' hello 123')).toBe(' HELLO 123');
});

test('должна не менять цифры: ("hello123") → "HELLO123"', () => {
  expect(upperCase('hello123')).toBe('HELLO123');
});

test('должна не менять знаки: ("hello!@#") → "HELLO!@#"', () => {
  expect(upperCase('hello!@#')).toBe('HELLO!@#');
});

test('должна вернуть "" для пустой строки', () => {
  expect(upperCase('')).toBe('');
});

test('должна вернуть строку без изменений, если нет строчных букв: ("123!@#") → "123!@#"', () => {
  expect(upperCase('123!@#')).toBe('123!@#');
});

test('должна перевести кириллицу: ("привет") → "ПРИВЕТ"', () => {
  expect(upperCase('привет')).toBe('ПРИВЕТ');
});

test('должна работать со смесью латиницы и кириллицы: ("hello привет") → "HELLO ПРИВЕТ"', () => {
  expect(upperCase('hello привет')).toBe('HELLO ПРИВЕТ');
});

test('должна не менять уже заглавные буквы (включая кириллицу): ("ПРИВЕТ") → "ПРИВЕТ"', () => {
  expect(upperCase('ПРИВЕТ')).toBe('ПРИВЕТ');
});

test('должна выбросить TypeError если аргумент не строка', () => {
  expect(() => upperCase(123)).toThrow(TypeError);
});
