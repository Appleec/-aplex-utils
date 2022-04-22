/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { addCommas } from './../lib/util'

describe('addCommas', () => {
    it('addCommas', () => {
        // console.log(addCommas(20000.0015));
        console.log(addCommas(null));
        expect(addCommas(20000)).toEqual('20,000');
        expect(addCommas('20000')).toEqual('20,000');
        expect(addCommas('abcdef')).toEqual('abcdef');
        expect(addCommas('120%')).toEqual('120%');
    });
});
