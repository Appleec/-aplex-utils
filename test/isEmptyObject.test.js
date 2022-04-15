/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { isEmptyObject } from './../lib/lang'

describe('isEmptyObject', () => {
    it('should return `true` for isEmptyObject', () => {
        expect(isEmptyObject({})).toBe(true);
    });

    it('should return `false` for non-isEmptyObject', () => {
        expect(isEmptyObject({a: 1})).toBe(false);
    });
});
