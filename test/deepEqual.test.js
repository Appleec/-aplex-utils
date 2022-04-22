/**
 *  Create by appleex on 2022/4/18 9:52 上午.
 */
import { deepEqual } from './../lib/function'

describe('deepEqual', () => {
    var a = {a: 1}, b = {a: 1}, c = {a: 2};

    it('true...', () => {
        expect(deepEqual(a, b)).toBeTruthy();
    });
    it('false...', () => {
        expect(deepEqual(a, c)).toBeFalsy();
    });
});
