/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { isNil } from './../lib/lang'

describe('isNil', () => {
    it('should return `true` for isNil', () => {
        expect(isNil(null)).toBe(true);
        expect(isNil(undefined)).toBe(true);
        expect(isNil(void 0)).toBe(true);
    });

    it('should return `false` for non-isNil', () => {
        expect(isNil(NaN)).toBe(false);
        expect(isNil('')).toBe(false);
    });
});
