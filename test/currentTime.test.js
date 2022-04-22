/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { currentTime } from './../lib/time'

describe('currentTime', () => {
    it('currentTime...', () => {
        // console.log(currentTime());
        // console.log(currentTime('YYYY-MM-DD'));
        expect(currentTime()).not.toBeNull();
    });
});
