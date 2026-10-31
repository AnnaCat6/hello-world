export function isEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
   throw new TypeError ('Аргументы должны быть строго строками');
  }
  
  function check (i) {
   const charA = a[i];
   const charB = b[i];

  if (charA === undefined && charB === undefined) {
    return true;
  }

  if (charA === undefined || charB === undefined) {
    return false;
  }

  if (charA !== charB) {
    return false;
  }

  return check(i + 1);

 }

  return check(0);
} 
