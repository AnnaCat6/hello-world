export default function isNotEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new TypeError('Аргументы должны быть строками!');
  }
  
let i = 0;

while (a[i] !== undefined && b[i] !== undefined) {
    const codeA = a.charCodeAt(i);
    const codeB = b.charCodeAt(i);

    if (codeA !== codeB) {
      return true;
    }
    i++;
  }

  if (a[i] !== undefined || b[i] !== undefined) {
    return true;
  }
  return false;
}