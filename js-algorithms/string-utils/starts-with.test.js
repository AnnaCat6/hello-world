import { startsWith } from './starts-with.js'

describe('Тесты startsWith', () => {
test('Должна вернуть true для одного символа', () => {
expect(startsWith('hello','h')).toBe(true);
    });

test('Должна вернуть true для подстроки', () => {
expect(startsWith('hello','hel')).toBe(true);
    });

test('Должна вернуть false для несовпадающего вхождения', () => {
expect(startsWith('hello','el')).toBe(false);
    });

test('Должна вернуть true для пустой поисковой строки', () => {
expect(startsWith('hello','')).toBe(true);
    });

test('Должна вернуть false если поисковая строка длиннее', () => {
expect(startsWith('hell','hello')).toBe(false);
    });

test('Должна вернуть true для точного совпадения', () => {
expect(startsWith('abc','abc')).toBe(true);
    });

test('Должна выбросить TypeError если первый аргумент не строка', () => {
expect(() => startsWith(123, 'hello')).toThrow(TypeError)
    });

test('Должна выбросить TypeError если второй аргумент не строка', () => {
expect(() => startsWith('hello', 123)).toThrow(TypeError)
    });

})