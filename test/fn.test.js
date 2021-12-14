/**
 * Created by appleex on 2020/5/9
 */
const __fn = require('../lib/fn')

describe('/** __fn **/', () => {

    test('__fn.deepCopy', () => {
        const a = { a: 1, c: 2 };
        // console.log(__fn.deepCopy(a));
        expect(__fn.deepCopy(a)).toEqual({a: 1, c: 2});
    });

    test('__fn.compare', () => {
        expect(__fn.compare('a', 'b')).toBe(-1);
        expect(__fn.compare(1, 2)).toBe(-1);
    });
});

