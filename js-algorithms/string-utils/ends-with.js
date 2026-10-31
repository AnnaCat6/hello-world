import { len } from './len.js'

export function endsWith(str, search) {
  if (typeof str !== 'string' || typeof search !== 'string') {
    throw new TypeError('Аргументы должны быть строками!');
  }

  if (search === '') {
    return true;
  }

  const strLen = len(str);
  const searchLen = len(search);

  if (searchLen > strLen) {
    return false;
  }

  const start = strLen - searchLen;

  for (let j = 0; j < searchLen; j++) {
    if (str[start + j] !== search[j]) {
      return false;
    }
  }

  return true;
}