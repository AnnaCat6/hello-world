import { describe, test, expect } from 'bun:test';
import { shift } from './shift.js';
import { lenArr } from './lenArr.js';

describe('Тесты shift', () => {
  test('Должна удалить первый элемент и вернуть его', () => {
    const arr = [1, 2, 3];

    const removed = shift(arr);

    expect(removed).toBe(1);
    expect(lenArr(arr)).toBe(2);
    expect(arr[0]).toBe(2);
    expect(arr[1]).toBe(3);
  });

  test('Должна вернуть undefined для пустого массива', () => {
    const arr = [];

    expect(shift(arr)).toBe(undefined);
    expect(lenArr(arr)).toBe(0);
  });

  test('Должна удалить единственный элемент', () => {
    const arr = [42];

    const removed = shift(arr);

    expect(removed).toBe(42);
    expect(lenArr(arr)).toBe(0);
  });

  test('Должна сохранить порядок остальных элементов', () => {
    const arr = ['a', 'b', 'c'];

    const removed = shift(arr);

    expect(removed).toBe('a');
    expect(arr[0]).toBe('b');
    expect(arr[1]).toBe('c');
    expect(lenArr(arr)).toBe(2);
  });

  test('Должна корректно удалить falsy значение (не спутать с undefined)', () => {
    const arr = [0, 1];

    const removed = shift(arr);

    expect(removed).toBe(0);
    expect(lenArr(arr)).toBe(1);
    expect(arr[0]).toBe(1);
  });

  test('Два shift подряд уменьшают длину на 2', () => {
    const arr = [1, 2, 3];

    const first = shift(arr);
    const second = shift(arr);

    expect(first).toBe(1);
    expect(second).toBe(2);
    expect(lenArr(arr)).toBe(1);
    expect(arr[0]).toBe(3);
  });

  test('Должна выбросить TypeError если arr не массив', () => {
    expect(() => shift('hello')).toThrow(TypeError);
  });
});