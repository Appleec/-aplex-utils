/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { isSameDay } from './../lib/lang'

describe('isSameDay', () => {
    it('should return `true` for isSameDay', () => {
        expect(isSameDay(new Date(), new Date())).toBe(true);
    });

    it('should return `false` for non-isSameDay', () => {
        expect(isSameDay(new Date(new Date().setDate(new Date().getDate()-1)), new Date())).toBe(false);
    });
});
