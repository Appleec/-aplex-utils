/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { currentLocaleTimeString } from './../lib/time'

describe('currentLocaleTimeString', () => {
    it('currentLocaleTimeString...', () => {
        // console.log(currentLocaleTimeString());
        expect(currentLocaleTimeString()).not.toBeNull();
    });
});
