/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { get } from './../lib/object'

describe('get', () => {
    it('get...', () => {
        var object = { 'a': [{ 'b': { 'c': 3 } }] };

        // console.log(get(object, 'a[0].b.c'));
        expect(get(object, 'a[0].b.c')).toEqual(3);
    });
});
