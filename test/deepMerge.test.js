/**
 *  Create by appleex on 2022/4/18 9:52 上午.
 */
import { deepMerge } from './../lib/function'

describe('deepMerge', () => {
    it('deepMerge...', () => {
        var object = {
            'a': [{ 'b': 2 }, { 'd': 4 }]
        };

        var other = {
            'a': [{ 'c': 3 }, { 'e': 5 }]
        };

        // console.log(deepMerge(object, other));
        expect(deepMerge(object, other)).toEqual({ a: [ { b: 2, c: 3 }, { d: 4, e: 5 } ] });
    });
});
