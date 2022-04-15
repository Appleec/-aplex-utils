/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { isRealNumber } from './../lib/lang'

describe('isRealNumber', () => {
    it('should return `true` for RealNumber', () => {
        expect(isRealNumber(0)).toBe(true);
        expect(isRealNumber(Infinity)).toBe(true);
        expect(isRealNumber(Number.MIN_VALUE)).toBe(true);
    });

    it('should return `false` for non-RealNumber', () => {
        expect(isRealNumber('3')).toBe(false);
        expect(isRealNumber(NaN)).toBe(false);
    });
});
