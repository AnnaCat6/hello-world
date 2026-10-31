import { len } from './len.js';

export function includes(str, search) {
  if (typeof str !== 'string' || typeof search !== 'string') {
    throw new TypeError('Аргументы должны быть строками!');
  }
  if (search === '' || len(search) > len(str)) return search === '';

  const strLen = len(str);
  const searchLen = len(search);

  for (let i = 0; i <= strLen - searchLen; i++) {
    let j = 0;
    while (j < searchLen && str[i + j] === search[j]) j++;
    if (j === searchLen) return true;
  }

  return false;
}