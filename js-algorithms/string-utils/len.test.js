import { describe, test, expect } from 'bun:test';
import { len } from './len.js';

describe('Тесты len', () => {
test('должна вернуть 5 для строки "hello"', () => {
    const result = len('hello');
    expect(result).toEqual(5); 
  });

test('Должна вернуть 0 для пустой строки', () => {
    const result = len('');
    expect(result).toBe(0);
});

test('Должна вернуть 3 для строки из трёх пробелов', () => {
    const result = len('   ');
    expect(result).toBe(3);
});

test('Должна корректно считать кириллицу', () => {
    const result = len('привет');
    expect(result).toBe(6);
});

test('Должна выбросить TypeError если аргумент — число 123', () => {
expect(() => len(123)).toThrow(TypeError);
});

test('Должна выбросить TypeError если аргумент — null, undefined', () => {
expect(() => len(null)).toThrow(TypeError);
expect(() => len(undefined)).toThrow(TypeError);

});
});