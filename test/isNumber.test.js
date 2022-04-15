/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import isNumber from './../lib/isNumber'

describe('isNumber', () => {
   it('should return `true` for numbers', () => {
       expect(isNumber(0)).toBe(true);
       expect(isNumber(Object(0))).toBe(true);
       expect(isNumber(NaN)).toBe(true);
   });

    it('should return `false` for non-numbers', () => {
        expect(isNumber(true)).toBe(false);
        expect(isNumber([1, 2, 3])).toBe(false);
        expect(isNumber(true)).toBe(false);
    });
});
