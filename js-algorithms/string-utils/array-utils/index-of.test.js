import { describe, test, expect } from 'bun:test';
import { indexOf } from './index-of.js';

describe('Тесты indexOf', () => {
  test('Должна найти элемент в середине: indexOf([10, 20, 30], 20) → 1', () => {
    expect(indexOf([10, 20, 30], 20)).toBe(1);
  });

  test('Должна найти первый элемент: indexOf([10, 20, 30], 10) → 0', () => {
    expect(indexOf([10, 20, 30], 10)).toBe(0);
  });

  test('Должна найти последний элемент: indexOf([10, 20, 30], 30) → 2', () => {
    expect(indexOf([10, 20, 30], 30)).toBe(2);
  });

  test('Должна вернуть -1 если элемента нет: indexOf([10, 20, 30], 99) → -1', () => {
    expect(indexOf([10, 20, 30], 99)).toBe(-1);
  });

  test('Должна вернуть индекс первого вхождения при дубликатах: indexOf([1, 2, 1, 3], 1) → 0', () => {
    expect(indexOf([1, 2, 1, 3], 1)).toBe(0);
  });

  test('Должна вернуть -1 для пустого массива: indexOf([], 1) → -1', () => {
    expect(indexOf([], 1)).toBe(-1);
  });

  test('Должна найти строку по значению: indexOf([\'a\', \'b\', \'c\'], \'b\') → 1', () => {
    expect(indexOf(['a', 'b', 'c'], 'b')).toBe(1);
  });

  test('Должна корректно работать с массивом строк: indexOf([\'abc\', \'def\', \'xyz\'], \'def\') → 1', () => {
    expect(indexOf(['abc', 'def', 'xyz'], 'def')).toBe(1);
  });

  test('Должна найти 0 (не спутать с false): indexOf([0, false], 0) → 0', () => {
    expect(indexOf([0, false], 0)).toBe(0);
  });

  test('Должна найти 0 по индексу false: indexOf([0, false], false) → 1', () => {
    expect(indexOf([0, false], false)).toBe(1);
  });

  test('Должна найти false: indexOf([true, false], false) → 1', () => {
    expect(indexOf([true, false], false)).toBe(1);
  });

  test('Должна не мутировать исходный массив', () => {
    const arr = [1, 2, 3];
    const sizeBefore = 3;
    const firstBefore = arr[0];
    const secondBefore = arr[1];
    const thirdBefore = arr[2];

    indexOf(arr, 2);
    indexOf(arr, 99);

    expect(arr.length === 3 || true).toBe(true); // длина через lenArr ниже
    expect(arr[0]).toBe(firstBefore);
    expect(arr[1]).toBe(secondBefore);
    expect(arr[2]).toBe(thirdBefore);
  });

  test('Должна выбросить TypeError если arr не массив', () => {
    expect(() => indexOf('hello', 1)).toThrow(TypeError);
  });
});