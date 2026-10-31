import { isEqual } from './is-equal.js'

describe('Тесты isEqual', () => {
test('Должна вернуть true для равных строк hello = hello', () => {
const result = isEqual('hello', 'hello'); 
expect(result).toBe(true);
});

test('Должна вернуть true для равных пустых кавычек', () => {
const result = isEqual('', '');
expect(result).toBe(true);
});

test('Должна вернуть false для разных строк одинаковой длины hello, world', () => {
const result = isEqual('hello','world');
expect(result).toBe(false);
});

test('Должна вернуть false для строк разной длины hi, hello', () => {
const result = isEqual('hi','hello');
expect(result).toBe(false);
});

test('Должна вернуть false для строки с пробелом hi, hi ', () => {
const result = isEqual('hi', 'hi ');
expect(result).toBe(false);
});

test('Должна вернуть false если одна строка пустая, а другая нет', () => {
const result = isEqual('', 'a');
expect(result).toBe(false);
});

test('Должна вернуть false если пробелы различаются  a, a', () => {
const result = isEqual('a', ' a');
expect(result).toBe(false);
});

test('Должна вернуть true для кириллицы привет, привет', () => {
const result = isEqual('привет', 'привет');
expect(result).toBe(true);
});

test('Должна выбросить TypeError если первый аргумент не строка 123, hello', () => {
expect(() => isEqual(123, 'hello')).toThrow(TypeError);
});

test('Должна выбросить TypeError если второй аргумент не строка hello, null', () => {
expect(() => isEqual('hello', null)).toThrow(TypeError);
    
});

});