import { endsWith } from './ends-with.js'

describe('Тесты endsWith', () => {
test('Должна вернуть true для одного символа', () => {
expect(endsWith('hello','o')).toBe(true);
    });

test('Должна вернуть true для подстроки', () => {
expect(endsWith('hello','llo')).toBe(true);
    });

test('Должна вернуть false для несовпадающего вхождения', () => {
expect(endsWith('hello','ell')).toBe(false);
    });

test('Должна вернуть true для пустой поисковой строки', () => {
expect(endsWith('hello','')).toBe(true);
    });

test('Должна вернуть false если поисковая строка длиннее', () => {
expect(endsWith('hell','hello')).toBe(false);
    });

test('Должна вернуть true для точного совпадения', () => {
expect(endsWith('abc','abc')).toBe(true);
    });

test('Должна выбросить TypeError если первый аргумент не строка', () => {
expect(() => endsWith(123, 'hello')).toThrow(TypeError)
});

test('Должна выбросить TypeError если второй аргумент не строка', () => {
expect(() => endsWith('hello', 123)).toThrow(TypeError)
});

})