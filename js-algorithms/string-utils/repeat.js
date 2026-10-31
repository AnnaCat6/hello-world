import { len } from './len.js';

export function repeat(str, count) {
  if (typeof str !== 'string') {
  throw new TypeError('Первый аргумент должен быть строкой!');
  }

  if (count === undefined) {
  return '';
  }

  if (typeof count !== 'number' || Number.isNaN(count)) {
  throw new TypeError('Второй аргумент должен быть числом!');
  }

  if (count < 0) {
  throw new RangeError('Количество повторений не может быть отрицательным!');
  }

  const times = count | 0;
  if (times === 0 || len(str) === 0) {
    return '';
  }
  
  let result = '';
  for (let i = 0; i < times; i++) {
  result += str;
  }
  return result;
}