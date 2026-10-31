import isLessOrEqual from './is-less-or-equal.js';

  describe('Тесты isLessOrEqual', () => {
  test('Должна вернуть true, если a явно меньше', () => {
  expect(isLessOrEqual('car', 'cat')).toBe(true);
  });

  test('Должна вернуть true, если строки равны', () => {
  expect(isLessOrEqual('hello', 'hello')).toBe(true);
  });

  test('Должна вернуть false, если a больше', () => {
  expect(isLessOrEqual('cat', 'car')).toBe(false);
  });
 
  test('Должна вернуть true, если a короче и символы совпадают', () => {
  expect(isLessOrEqual('hello', 'hello!')).toBe(true);
  });

  test('Должна вернуть false, если a длиннее и символы совпадают', () => {
  expect(isLessOrEqual('hello!', 'hello')).toBe(false);
  });

  test('Должна вернуть true для пустых строк', () => {
  expect(isLessOrEqual('', '')).toBe(true);
  });

  test('Должна выбросить TypeError если первый аргумент не строка', () => {
  expect(() => isLessOrEqual(123, 'hello')).toThrow(TypeError);
  });
  
  });
  



