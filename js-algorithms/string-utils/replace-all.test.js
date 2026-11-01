import { replaceAll } from './replace-all.js';

test('должна заменить одно вхождение: ("hello", "ll", "LL") → "heLLo"', () => {
  expect(replaceAll('hello', 'll', 'LL')).toBe('heLLo');
});

test('должна заменить несколько вхождений: ("banana", "na", "NA") → "baNANA"', () => {
  expect(replaceAll('banana', 'na', 'NA')).toBe('baNANA');
});

test('должна не учитывать подставленную строку: ("aaa", "aa", "ba") → "baa"', () => {
  expect(replaceAll('aaa', 'aa', 'ba')).toBe('baa');
});

test('должна вернуть исходную строку, если search не найден: ("hello", "eli", "hhh") → "hello"', () => {
  expect(replaceAll('hello', 'eli', 'hhh')).toBe('hello');
});

test('должна работать с заменой символа на строку: ("a", "a", "hello") → "hello"', () => {
  expect(replaceAll('a', 'a', 'hello')).toBe('hello');
});

test('должна работать с заменой на более длинную: ("hi", "i", "ello") → "hello"', () => {
  expect(replaceAll('hi', 'i', 'ello')).toBe('hello');
});

test('должна работать с заменой на пустую строку: ("hello", "l", "") → "heo"', () => {
  expect(replaceAll('hello', 'l', '')).toBe('heo');
});

test('должна вернуть "" для пустой исходной строки: ("", "abc", "X") → ""', () => {
  expect(replaceAll('', 'abc', 'X')).toBe('');
});

test('должна вставить replacement вокруг каждого символа при пустом search: ("abc", "", "X") → "XaXbXcX"', () => {
  expect(replaceAll('abc', '', 'X')).toBe('XaXbXcX');
});

test('должна выбросить TypeError если любой аргумент не строка', () => {
  expect(() => replaceAll(123, 'a', 'b')).toThrow(TypeError);
  expect(() => replaceAll('a', 123, 'b')).toThrow(TypeError);
  expect(() => replaceAll('a', 'b', 123)).toThrow(TypeError);
});
