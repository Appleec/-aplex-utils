/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { randomPassword } from './../lib/util'

describe('randomPassword', () => {
    it('randomPassword...', () => {
        // console.log(randomPassword(3));
        // console.log(byteLength('abcd'));
        expect(randomPassword()).not.toBeNull();
    });
});
