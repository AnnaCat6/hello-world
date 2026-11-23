import { describe, test, expect } from 'bun:test';
import { lenArr } from './lenArr.js';

describe('Тесты lenArr', () => {
  test('Должна вернуть 3 для [1, 2, 3]', () => {
    expect(lenArr([1, 2, 3])).toBe(3);
  });

  test('Должна вернуть 0 для пустого массива []', () => {
    expect(lenArr([])).toBe(0);
  });

  test('Должна вернуть 1 для массива из одного элемента [42]', () => {
    expect(lenArr([42])).toBe(1);
  });

  test('Должна вернуть 4 для массива строк', () => {
    expect(lenArr(['a', 'b', 'c', 'd'])).toBe(4);
  });

  test('Должна вернуть 5 для массива с разными типами', () => {
    expect(lenArr([1, 'two', true, null, 0])).toBe(5);
  });

  test('Должна не мутировать исходный массив', () => {
    const arr = [1, 2, 3];
    const sizeBefore = lenArr(arr);
    const snapshot = [arr[0], arr[1], arr[2]];

    lenArr(arr);

    expect(lenArr(arr)).toBe(sizeBefore);
    expect(arr[0]).toBe(snapshot[0]);
    expect(arr[1]).toBe(snapshot[1]);
    expect(arr[2]).toBe(snapshot[2]);
  });

  test('Должна выбросить TypeError если передать строку', () => {
    expect(() => lenArr('hello')).toThrow(TypeError);
  });

  test('Должна выбросить TypeError если передать число', () => {
    expect(() => lenArr(123)).toThrow(TypeError);
  });

  test('Должна выбросить TypeError если передать объект', () => {
    expect(() => lenArr({ 0: 'a' })).toThrow(TypeError);
  });

  test('Должна выбросить TypeError если аргумент не передан', () => {
    expect(() => lenArr()).toThrow(TypeError);
  });
});