/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { isPrime } from './../lib/lang'

describe('isPrime', () => {
    it('should return `true` for isNil', () => {
        expect(isPrime('s')).toBe(true);
    });

    it('should return `false` for non-isNil', () => {
        expect(isPrime(NaN)).toBe(false);
    });
});
