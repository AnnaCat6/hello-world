import { describe, test, expect } from 'bun:test';
import { pop } from './pop.js';
import { lenArr } from './lenArr.js';

describe('Тесты pop', () => {
  test('Должна удалить последний элемент и вернуть его', () => {
    const arr = [1, 2, 3];

    const removed = pop(arr);

    expect(removed).toBe(3);
    expect(lenArr(arr)).toBe(2);
    expect(arr[0]).toBe(1);
    expect(arr[1]).toBe(2);
    expect(arr[2]).toBe(undefined);
  });

  test('Должна вернуть undefined для пустого массива', () => {
    const arr = [];

    expect(pop(arr)).toBe(undefined);
    expect(lenArr(arr)).toBe(0);
  });

  test('Должна удалить единственный элемент', () => {
    const arr = [42];

    const removed = pop(arr);

    expect(removed).toBe(42);
    expect(lenArr(arr)).toBe(0);
  });

  test('Должна работать с массивом строк', () => {
    const arr = ['a', 'b'];

    const removed = pop(arr);

    expect(removed).toBe('b');
    expect(lenArr(arr)).toBe(1);
    expect(arr[0]).toBe('a');
  });

  test('Должна корректно удалить 0 (не спутать с undefined)', () => {
    const arr = [0];

    const removed = pop(arr);

    expect(removed).toBe(0);
    expect(lenArr(arr)).toBe(0);
  });

  test('Должна корректно удалить false', () => {
    const arr = [1, false];

    const removed = pop(arr);

    expect(removed).toBe(false);
    expect(lenArr(arr)).toBe(1);
  });

  test('После двух pop подряд длина уменьшается на 2', () => {
    const arr = [1, 2, 3];

    pop(arr);
    pop(arr);

    expect(lenArr(arr)).toBe(1);
    expect(arr[0]).toBe(1);
  });

  test('Должна выбросить TypeError, если arr не массив', () => {
    expect(() => pop('hello')).toThrow(TypeError);
  });
});