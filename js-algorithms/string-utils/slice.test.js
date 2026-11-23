import { describe, test, expect } from 'bun:test';
import { slice } from './slice.js';

test('должна вернуть "hello" для ("hello", 0, 5)', () => {
  expect(slice('hello', 0, 5)).toBe('hello');
});

test('должна вернуть "ell" для ("hello", 1, 4)', () => {
  expect(slice('hello', 1, 4)).toBe('ell');
});

test('должна вернуть "ll" для ("hello", 2, 4)', () => {
  expect(slice('hello', 2, 4)).toBe('ll');
});

test('должна вернуть "llo" для ("hello", 2) — без end, до конца', () => {
  expect(slice('hello', 2)).toBe('llo');
});

test('должна вернуть "h" для ("hello", 0, 1)', () => {
  expect(slice('hello', 0, 1)).toBe('h');
});

test('должна вернуть "l" для ("hello", 2, 3)', () => {
  expect(slice('hello', 2, 3)).toBe('l');
});

test('должна вернуть "o" для ("hello", 4)', () => {
  expect(slice('hello', 4)).toBe('o');
});

test('должна вернуть "llo" для отрицательного start: ("hello", -3)', () => {
  expect(slice('hello', -3)).toBe('llo');
});

test('должна вернуть "hell" для отрицательного end: ("hello", 0, -1)', () => {
  expect(slice('hello', 0, -1)).toBe('hell');
});

test('должна вернуть "ll" для обоих отрицательных: ("hello", -3, -1)', () => {
  expect(slice('hello', -3, -1)).toBe('ll');
});

test('должна вернуть "" если start >= end после нормализации: ("hello", 4, 1)', () => {
  expect(slice('hello', 4, 1)).toBe('');
});

test('должна вернуть "" если start за границей: ("hello", 10, 15)', () => {
  expect(slice('hello', 10, 15)).toBe('');
});

test('должна нормализовать выходящий за границы отрицательный start: ("hello", -10, 3) → "hel"', () => {
  expect(slice('hello', -10, 3)).toBe('hel');
});

test('должна вернуть "" для пустой строки: ("", 0, 1) → ""', () => {
  expect(slice('', 0, 1)).toBe('');
});

test('должна работать с кириллицей: ("привет", 1, 4) → "рив"', () => {
  expect(slice('привет', 1, 4)).toBe('рив');
});

test('должна выбросить TypeError если str не строка', () => {
  expect(() => slice(123, 0, 1)).toThrow(TypeError);
});

test('должна выбросить TypeError если 2-й аргумент не число', () => {
  expect(() => slice('hello', '0', 1)).toThrow(TypeError);
});

test('должна выбросить TypeError если 3-й аргумент указан и не число', () => {
  expect(() => slice('hello', 0, '1')).toThrow(TypeError);
});
