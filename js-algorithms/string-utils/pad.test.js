import { describe, test, expect } from 'bun:test';
import { pad } from './pad.js';

test('должна дополнить слева: ("hi", 5, "-", "left") → "---hi"', () => {
  expect(pad('hi', 5, '-', 'left')).toBe('---hi');
});

test('должна дополнить справа: ("hi", 5, "-", "right") → "hi---"', () => {
  expect(pad('hi', 5, '-', 'right')).toBe('hi---');
});

test('должна дополнить с обеих сторон (чётное): ("hi", 6, "-", "both") → "--hi--"', () => {
  expect(pad('hi', 6, '-', 'both')).toBe('--hi--');
});

test('должна дополнить с обеих сторон (нечётное, лишний справа): ("hi", 5, "-", "both") → "-hi--"', () => {
  expect(pad('hi', 5, '-', 'both')).toBe('-hi--');
});

test('должна вернуть строку без изменений, если длина уже достаточная: ("hello", 5, "-", "left") → "hello"', () => {
  expect(pad('hello', 5, '-', 'left')).toBe('hello');
});

test('должна вернуть строку без изменений, если она длиннее целевой: ("hello", 3, "-", "left") → "hello"', () => {
  expect(pad('hello', 3, '-', 'left')).toBe('hello');
});

test('должна работать с пробелами: ("a", 3, " ", "right") → "a  "', () => {
  expect(pad('a', 3, ' ', 'right')).toBe('a  ');
});

test('должна работать с пустой исходной строкой: ("", 4, "x", "both") → "xxxx"', () => {
  expect(pad('', 4, 'x', 'both')).toBe('xxxx');
});

test('должна вернуть "" для pad("", 0, "-", "left")', () => {
  expect(pad('', 0, '-', 'left')).toBe('');
});

test('должна дополнить многосимвольной строкой слева: ("hi", 7, "ab", "left") → "ababahi"', () => {
  expect(pad('hi', 7, 'ab', 'left')).toBe('ababahi');
});

test('должна дополнить многосимвольной строкой справа: ("hi", 7, "ab", "right") → "hiababa"', () => {
  expect(pad('hi', 7, 'ab', 'right')).toBe('hiababa');
});

test('должна выбросить ошибку при неверном side: ("a", 3, "-", "top")', () => {
  expect(() => pad('a', 3, '-', 'top')).toThrow(TypeError);
});

test('должна выбросить TypeError если str не строка', () => {
  expect(() => pad(123, 5, '-', 'left')).toThrow(TypeError);
});