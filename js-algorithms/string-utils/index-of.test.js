import { indexOf } from './index-of.js'

describe('Тесты indexOf', () => {
test('Должна вернуть 0 для подстроки в начале', () => {
expect(indexOf('hello','he')).toBe(0);
    });

test('Должна вернуть 2 для подстроки в середине', () => {
expect(indexOf('hello','ll')).toBe(2);
    });

test('Должна вернуть 3 для подстроки в конце', () => {
expect(indexOf('hello','lo')).toBe(3);
    });

test('Должна вернуть -1 если подстрока не найдена', () => {
expect(indexOf('hello','li')).toBe(-1);
    });

test('Должна вернуть 0 для пустой поисковой строки', () => {
expect(indexOf('hello','')).toBe(0);
    });

test('Должна вернуть -1 если поисковая строка длиннее исходной', () => {
expect(indexOf('hello','hello!')).toBe(-1);
    });

test('Должна вернуть 0 для одинаковых строк', () => {
expect(indexOf('abc','abc')).toBe(0);
    });

test('Должна вернуть индекс первого вхождения при нескольких совпадениях', () => {
expect(indexOf('ababa','ba')).toBe(1);
    });

test('Должна найти подстроку, которая начинается внутри предыдущего почти-совпадения', () => {
expect(indexOf('abababc','ababc')).toBe(2);
    });

test('Должна вернуть 0 для поиска одного символа', () => {
expect(indexOf('hello','h')).toBe(0);
    });

test('Должна вернуть 2 для поиска повторяющегося символа', () => {
expect(indexOf('hello','l')).toBe(2);
    });

test('Должна работать с кириллицей', () => {
expect(indexOf('привет','иве')).toBe(2);
    });

test('Должна выбросить TypeError если первый аргумент не строка', () => {
expect(() => indexOf(123, 'hello')).toThrow(TypeError)
});

test('Должна выбросить TypeError если второй аргумент не строка', () => {
expect(() => indexOf('hello', 123)).toThrow(TypeError)
});

})