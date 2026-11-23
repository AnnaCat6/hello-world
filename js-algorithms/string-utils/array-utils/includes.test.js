import { describe, test, expect } from 'bun:test';
import { includes } from './includes.js';

describe('Тесты includes', () => {
  test('Должна вернуть true если элемент есть: includes([1, 2, 3], 2) → true', () => {
    expect(includes([1, 2, 3], 2)).toBe(true);
  });

  test('Должна вернуть false если элемента нет: includes([1, 2, 3], 9) → false', () => {
    expect(includes([1, 2, 3], 9)).toBe(false);
  });

  test('Должна вернуть false для пустого массива: includes([], 1) → false', () => {
    expect(includes([], 1)).toBe(false);
  });

  test('Должна вернуть true для первого элемента: includes([1, 2, 3], 1) → true', () => {
    expect(includes([1, 2, 3], 1)).toBe(true);
  });

  test('Должна вернуть true для последнего элемента: includes([1, 2, 3], 3) → true', () => {
    expect(includes([1, 2, 3], 3)).toBe(true);
  });

  test('Должна найти строку: includes([\'a\', \'b\'], \'b\') → true', () => {
    expect(includes(['a', 'b'], 'b')).toBe(true);
  });

  test('Должна различать 0 и false: includes([0], 0) → true', () => {
    expect(includes([0], 0)).toBe(true);
  });

  test('Должна различать 0 и false: includes([0], false) → false', () => {
    expect(includes([0], false)).toBe(false);
  });

  test('Должна не мутировать исходный массив', () => {
    const arr = [1, 2, 3];
    const firstBefore = arr[0];
    const secondBefore = arr[1];
    const thirdBefore = arr[2];

    includes(arr, 2);
    includes(arr, 9);

    expect(arr[0]).toBe(firstBefore);
    expect(arr[1]).toBe(secondBefore);
    expect(arr[2]).toBe(thirdBefore);
  });

  test('Должна выбросить TypeError если arr не массив', () => {
    expect(() => includes('hello', 1)).toThrow(TypeError);
  });
});