import { describe, test, expect } from 'bun:test';
import { push } from './push.js';
import { len } from './len.js';

describe('Тесты push', () => {
  test('Должна добавить элемент в конец и вернуть новую длину', () => {
    const arr = [1, 2];

    const result = push(arr, 3);

    expect(result).toBe(3);
    expect(arr[0]).toBe(1);
    expect(arr[1]).toBe(2);
    expect(arr[2]).toBe(3);
  });

  test('Должна работать с пустым массивом', () => {
    const arr = [];

    const result = push(arr, 'a');

    expect(result).toBe(1);
    expect(arr[0]).toBe('a');
  });

  test('Должна добавить несколько элементов по очереди', () => {
    const arr = [];

    const first = push(arr, 'x');
    const second = push(arr, 'y');

    expect(first).toBe(1);
    expect(second).toBe(2);
    expect(arr[0]).toBe('x');
    expect(arr[1]).toBe('y');
  });

  test('Должна добавить элемент в массив из одного элемента', () => {
    const arr = [10];

    const result = push(arr, 20);

    expect(result).toBe(2);
    expect(arr[0]).toBe(10);
    expect(arr[1]).toBe(20);
  });

  test('Должна добавить 0, false, null как полноценные элементы', () => {
    const arr = [0, false, null];

    push(arr, 0);
    push(arr, false);
    push(arr, null);

    expect(len(arr)).toBe(6);
    expect(arr[3]).toBe(0);
    expect(arr[4]).toBe(false);
    expect(arr[5]).toBe(null);
  });

  test('Должна добавить объект как элемент', () => {
    const arr = [];

    const result = push(arr, { a: 1 });

    expect(result).toBe(1);
    expect(arr[0]).toEqual({ a: 1 });
  });

  test('Исходный массив изменился — элемент в конце', () => {
    const arr = [1, 2, 3];

    push(arr, 'last');

    const lastIndex = len(arr) - 1;
    expect(arr[lastIndex]).toBe('last');
  });

  test('Должна выбросить TypeError если arr не массив', () => {
    expect(() => push('hello', 1)).toThrow(TypeError);
  });
});