export function len(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Аргумент должен быть строкой!');
  }

  let count = 0;

  while (str[count] !== undefined) {
    count++;
  }
  
  return count;
}