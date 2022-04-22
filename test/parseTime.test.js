/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { parseTime } from './../lib/time'

describe('parseTime', () => {
    it('parseTime...', () => {
        var d = new Date('2022-01-01 12:00:00');

        // console.log(parseTime(d, 'hh:mm:ss'));
        // console.log(parseTime(d, 'YYYY-MM-DD'));
        // console.log(parseTime(d));
        // console.log(parseTime());

        expect(parseTime(d, 'hh:mm:ss')).toBe('12:00:00');
        expect(parseTime(d, 'YYYY-MM-DD')).toBe('2022-01-01');
        expect(parseTime(d)).toBe('2022-01-01 12:00:00');
        expect(parseTime()).toBeNull();
    });
});
