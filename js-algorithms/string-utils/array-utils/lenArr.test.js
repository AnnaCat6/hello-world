import { describe, test, expect } from "bun:test";
import { len } from './len.js';

describe('Тесты lenArr', () => {
  test('Должна вернуть 3 для массива [1, 2, 3]', () => {
    expect(lenArr([1, 2, 3])).toBe(3);
  });

  test('Должна вернуть 0 для пустого массива', () => {
    expect(lenArr([])).toBe(0);
  });

  test('Должна вернуть 1 для массива из одного элемента', () => {
    expect(lenArr([42])).toBe(1);
  });

  test('Должна вернуть 4 для массива строк', () => {
    expect(lenArr(['a', 'b', 'c', 'd'])).toBe(4);
  });

  test('Должна вернуть 5 для массива с разными типами', () => {
    expect(lenArr([1, 'two', true, null, 0])).toBe(5);
  });

  test('Должна вернуть 3 для массива с undefined', () => {
    expect(lenArr([10, undefined, 30])).toBe(3);
  });

  test('Должна вернуть 3 для разреженного массива', () => {
    expect(lenArr(new Array(3))).toBe(3);
  });

  test('Должна не мутировать исходный массив', () => {
    const arr = [1, 2, 3];
    const snapshot = [...arr];

    lenArr(arr);

    expect(arr).toEqual(snapshot);
  });

  test('Должна выбросить TypeError, если передать строку', () => {
    expect(() => lenArr('hello')).toThrow(TypeError);
  });

  test('Должна выбросить TypeError, если передать число', () => {
    expect(() => lenArr(123)).toThrow(TypeError);
  });

  test('Должна выбросить TypeError, если передать объект', () => {
    expect(() => lenArr({ 0: 'a' })).toThrow(TypeError);
  });

  test('Должна выбросить TypeError, если аргумент не передан', () => {
    expect(() => lenArr()).toThrow(TypeError);
  });
});