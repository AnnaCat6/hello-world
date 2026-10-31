export default function isLess(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new TypeError('Аргументы должны быть строками!');
  }
  
let i = 0;

while (a[i] !== undefined && b[i] !== undefined) {
  if (a.charCodeAt(i) < b.charCodeAt(i)) {
    return true;
  } 
  if (a.charCodeAt(i) > b.charCodeAt(i)) {
    return false;
  }
  i++;
  } 
  if (a[i] === undefined && b[i] !== undefined) {
    return true;
  } else {
    return false;
  }
}
