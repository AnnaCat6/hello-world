import { len } from './len.js';

export function reverse (str) {
  if (typeof str !== 'string') {
    throw new TypeError('Аргумент должен быть строкой!');
  }

  const strLen = len(str);
  let result = '';

  for (let i = strLen - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}