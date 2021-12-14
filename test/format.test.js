/**
 * Created by appleex on 2020/5/9
 */
const __format = require('../lib/format')

describe('/** __format **/', () => {

    test('__format.sortObject', () => {
        const a = { a: 1, c: 2 };
        // console.log(__format.sortObject(a, 'desc'));
        expect(__format.sortObject(a, 'desc')).toEqual({a: 1, c: 2});
    });
});

