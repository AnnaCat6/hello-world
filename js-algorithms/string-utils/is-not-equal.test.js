import isNotEqual from './is-not-equal.js'

describe('функция isNotEqual', () => {
test('Должна вернуть true для разных строк hello, world', () => {
const result = isNotEqual('hello','world');
expect(result).toBe(true);
});

test('Должна вернуть false для одинаковых строк abc, abc', () => {
const result = isNotEqual('abc','abc');
expect(result).toBe(false);
});

test('Должна вернуть true для строк разной длины hi, hello', () => {
const result = isNotEqual('hi','hello');
expect(result).toBe(true);
});
 
test('Должна вернуть false для пустых строк', () => {
const result = isNotEqual('','');
expect(result).toBe(false);
});

test('Должна выбросить TypeError если первый аргумент не строка', () => {
expect(() => isNotEqual(123, 'hello')).toThrow(TypeError);
});

test('Должна выбросить TypeError если второй аргумент не строка', () => {
expect(() => isNotEqual('hello', null)).toThrow(TypeError);
});

});
