/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { convertToUnit } from './../lib/util'

describe('convertToUnit', () => {
    it('convertToUnit...', () => {
        // console.log(convertToUnit('a'));
        expect(convertToUnit(16, 'g')).toEqual('16g');
        expect(convertToUnit()).toEqual(undefined);
        expect(convertToUnit(16)).toEqual('16px');
    });
});
