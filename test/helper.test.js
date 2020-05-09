/**
 * Created by appleex on 2020/5/9
 */
const {
    isArray,
    humanReadableFileSize,
    looseEqual,
    arrayEquals,
    isEmpty,
    keyCodes,
    convertToUnit,
    mergeDeep
} = require('../lib/helper')

describe('/** is return true or false **/', () => {
    test('isArray', () => {
        expect(isArray([])).toBe(true);
    });
    test('isEmpty', () => {
        // console.log('isEmpty:', isEmpty(0))
        expect(isEmpty([])).toBe(true);
    });
});

describe('/** function check **/', () => {
    test('humanReadableFileSize', () => {
        // console.log(humanReadableFileSize(900));
        expect(humanReadableFileSize(1000));
    });

    test('looseEqual', () => {
        const a = { a: 1, c: 1 };
        const b = { a: 1 };
        // console.log(looseEqual(a, b));
        expect(looseEqual(a, b));
    });

    test('arrayEquals', () => {
        const a = [
            { a: 1 }
        ];
        const b = [
            { a: 1 }
        ];
        // console.log(arrayEqual(a, b));
        expect(arrayEquals(a, b));
    });

    test('convertToUnit', () => {
        console.log('convertToUnit:', convertToUnit('300', 'm'))
        expect(convertToUnit(100));
    });

    test('mergeDeep', () => {
        const a = { a: 1, b: { d: 4 } };
        const b = { a: 2, b: { c: 3 } };
        console.log('mergeDeep:', mergeDeep(a, b))
    });
});

