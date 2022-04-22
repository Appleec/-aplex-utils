/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { byteLength } from './../lib/util'

describe('byteLength', () => {
    it('byteLength...', () => {
        // console.log(byteLength('你是谁'));
        // console.log(byteLength('abcd'));
        expect(byteLength('abcd')).toEqual(4);
    });
});
