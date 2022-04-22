/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { createUniqueString } from './../lib/util'

describe('createUniqueString', () => {
    it('createUniqueString...', () => {
        // console.log(createUniqueString());
        expect(createUniqueString()).not.toBeNull();
    });
});
