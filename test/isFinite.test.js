/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { isArray } from './../lib/lang'

describe('isArray', () => {
    it('should return `true` for array', () => {
        expect(isArray([0])).toBe(true);
    });

    it('should return `false` for non-numbers', () => {
        expect(isArray({})).toBe(false);
    });
});
