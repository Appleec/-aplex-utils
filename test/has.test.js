/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { has } from './../lib/object'

describe('has', () => {
    it('has...', () => {
        var object = { 'a': [{ 'b': { 'c': 3 } }] };

        // console.log(get(object, 'a[0].b.c'));
        expect(has(object, 'a')).toBeTruthy();
    });
});
