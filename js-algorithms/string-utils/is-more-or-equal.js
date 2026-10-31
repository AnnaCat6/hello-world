export default function isMoreOrEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new TypeError('Аргументы должны быть строками!');
  }
  
let i = 0;

while (a[i] !== undefined && b[i] !== undefined) {
  if (a.charCodeAt(i) > b.charCodeAt(i)) {
    return true;
  } 
  if (b.charCodeAt(i) > a.charCodeAt(i)) {
    return false;
  }
  i++;
  } 
  if (a[i] !== undefined) {
    return true;
  } else {
    return b[i] === undefined;
  }
}
