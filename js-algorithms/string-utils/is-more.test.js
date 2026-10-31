import { isMore } from './is-more.js'
 
describe('Тесты isMore', () => {
test('Должна вернуть true если a явно больше — различие на третьем символе cat, car', () => {
expect(isMore('cat', 'car')).toBe(true);
});

test('Должна вернуть false если a явно меньше car, cat', () => {
expect(isMore('car', 'cat')).toBe(false);
});

test('Должна вернуть false для равных строк', () => {
expect(isMore('hello', 'hello')).toBe(false);
});

test('Должна вернуть true если a длиннее, но символы совпадают', () => {
expect(isMore('hello!', 'hello')).toBe(true);
});

test('Должна вернуть false если a короче, но символы совпадают', () => {
expect(isMore('hello', 'hello!')).toBe(false);
});

test('Должна вернуть true если первый символ a больше — длина не важна', () => {
expect(isMore('b', 'aaaaa')).toBe(true);
});

test('Должна вернуть false для заглавной vs строчной — Admin, admini', () => {
expect(isMore('Admin', 'admini')).toBe(false);
});

test('Должна вернуть false если a начинается с пробела', () => {
expect(isMore(' a', 'aa')).toBe(false);
});

test('Должна вернуть true если a заканчивается пробелом', () => {
expect(isMore('aa ', 'aa')).toBe(true);
});

test('Должна вернуть false для пустых строк', () => {
expect(isMore('', '')).toBe(false);
});

test('Должна вернуть false если a пустая, b нет', () => {
expect(isMore('', 'a')).toBe(false);
});

test('Должна выбросить TypeError если первый аргумент не строка', () => {
expect(() => isMore(123, 'hello')).toThrow(TypeError);
});

test('Должна выбросить TypeError если второй аргумент не строка', () => {
expect(() => isMore('hello', null)).toThrow(TypeError);
});
     
});
