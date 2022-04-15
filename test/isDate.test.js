/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { isDate } from './../lib/lang'

describe('isDate', () => {
    it('should return `true` for isDate', () => {
        expect(isDate(new Date())).toBe(true);
    });

    it('should return `false` for non-isDate', () => {
        expect(isDate('Mon April 23 2012')).toBe(false);
    });
});
