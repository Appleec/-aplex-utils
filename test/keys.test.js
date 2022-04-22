/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { keys } from './../lib/object'

describe('keys', () => {
    it('keys...', () => {
        // console.log(keys('abc'));
        // console.log(keys({a: 1, b: 1}));
        expect(keys({a: 1, b: 1})).toEqual(['a', 'b']);
        expect(keys('abc')).toEqual(['0', '1', '2']);
    });
});
