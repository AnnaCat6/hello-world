import { describe, test, expect } from 'bun:test';
import { unshift } from './unshift.js';
import { lenArr } from './lenArr.js';

describe('Тесты unshift', () => {
  test('Должна добавить элемент в начало и вернуть новую длину', () => {
    const arr = [2, 3];

    const result = unshift(arr, 1);

    expect(result).toBe(3);
    expect(arr[0]).toBe(1);
    expect(arr[1]).toBe(2);
    expect(arr[2]).toBe(3);
  });

  test('Должна работать с пустым массивом', () => {
    const arr = [];

    const result = unshift(arr, 'a');

    expect(result).toBe(1);
    expect(arr[0]).toBe('a');
  });

  test('Должна добавить в массив из одного элемента', () => {
    const arr = [20];

    const result = unshift(arr, 10);

    expect(result).toBe(2);
    expect(arr[0]).toBe(10);
    expect(arr[1]).toBe(20);
  });

  test('Должна сохранить порядок остальных элементов', () => {
    const arr = ['b', 'c', 'd'];

    const result = unshift(arr, 'a');

    expect(result).toBe(4);
    expect(arr[0]).toBe('a');
    expect(arr[1]).toBe('b');
    expect(arr[2]).toBe('c');
    expect(arr[3]).toBe('d');
  });

  test('Два unshift подряд: первый элемент становится вторым', () => {
    const arr = ['x'];

    unshift(arr, 'y');
    unshift(arr, 'z');   

    expect(arr[0]).toBe('z');
    expect(arr[1]).toBe('y');
    expect(arr[2]).toBe('x');
    expect(lenArr(arr)).toBe(3);
  });

  test('Должна выбросить TypeError если arr не массив', () => {
    expect(() => unshift('hello', 1)).toThrow(TypeError);
  });
});