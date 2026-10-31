import { includes } from './includes.js'

describe('Тесты includes', () => {
test('Должна вернуть true для подстроки в начале ', () => {
expect(includes('hello','he')).toBe(true);
    });

test(' Должна вернуть true для подстроки в середине', () => {
expect(includes('hello','ll')).toBe(true);
    });

test('Должна вернуть true для подстроки в конце', () => {
expect(includes('hello','lo')).toBe(true);
    });

test('Должна вернуть false если подстрока не найдена', () => {
expect(includes('hello','li')).toBe(false);
    });

test('Должна вернуть true для пустой поисковой строки', () => {
expect(includes('hello','')).toBe(true);
    });

test('Должна вернуть false если поисковая строка длиннее исходной', () => {
expect(includes('hello','hello!')).toBe(false);
    });

test('Должна вернуть true для одинаковых строк', () => {
expect(includes('abc','abc')).toBe(true);
    });

test('Должна вернуть true при нескольких совпадениях', () => {
expect(includes('ababa','ba')).toBe(true);
    });

test('Должна найти подстроку, которая начинается внутри предыдущего почти-совпадения', () => {
expect(includes('abababc','ababc')).toBe(true);
    });

test('Должна вернуть true для поиска одного символа в начале', () => {
expect(includes('hello','h')).toBe(true);
    });

test('Должна вернуть true для поиска символа в середине', () => {
expect(includes('hello','l')).toBe(true);
    });

test('Должна вернуть true для поиска символа в конце', () => {
expect(includes('hello','lo')).toBe(true);
    });

test('Должна работать с кириллицей', () => {
expect(includes('привет','иве')).toBe(true);
    });

test('Должна выбросить TypeError если первый аргумент не строка', () => {
expect(() => includes(123, 'hello')).toThrow(TypeError)
});

test('Должна выбросить TypeError если второй аргумент не строка', () => {
expect(() => includes('hello', 123)).toThrow(TypeError)
});

})