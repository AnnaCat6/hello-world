import { describe, test, expect } from 'bun:test';
import { lowerCase } from './lower-case.js';

test('должна перевести все заглавные латинские: ("HELLO") → "hello"', () => {
  expect(lowerCase('HELLO')).toBe('hello');
});

test('должна оставить строчные без изменений: ("hello") → "hello"', () => {
  expect(lowerCase('hello')).toBe('hello');
});

test('должна работать со смешанным регистром: ("Hello World") → "hello world"', () => {
  expect(lowerCase('Hello World')).toBe('hello world');
});

test('должна не трогать пробелы: (" HELLO 123") → " hello 123"', () => {
  expect(lowerCase(' HELLO 123')).toBe(' hello 123');
});

test('должна не менять цифры: ("HELLO123") → "hello123"', () => {
  expect(lowerCase('HELLO123')).toBe('hello123');
});

test('должна не менять знаки: ("HELLO!@#") → "hello!@#"', () => {
  expect(lowerCase('HELLO!@#')).toBe('hello!@#');
});

test('должна вернуть "" для пустой строки', () => {
  expect(lowerCase('')).toBe('');
});

test('должна вернуть строку без изменений, если нет заглавных букв: ("123!@#") → "123!@#"', () => {
  expect(lowerCase('123!@#')).toBe('123!@#');
});

test('должна перевести кириллицу: ("ПРИВЕТ") → "привет"', () => {
  expect(lowerCase('ПРИВЕТ')).toBe('привет');
});

test('должна работать со смесью латиницы и кириллицы: ("HELLO ПРИВЕТ") → "hello привет"', () => {
  expect(lowerCase('HELLO ПРИВЕТ')).toBe('hello привет');
});

test('должна не менять уже строчные буквы (включая кириллицу): ("привет") → "привет"', () => {
  expect(lowerCase('привет')).toBe('привет');
});

test('должна выбросить TypeError если аргумент не строка', () => {
  expect(() => lowerCase(123)).toThrow(TypeError);
});
