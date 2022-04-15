/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { isJSONObject } from './../lib/lang'

describe('isJSONObject', () => {
    it('should return `true` for isJSONObject', () => {
        var o = { a: 1 };
        expect(isJSONObject(JSON.stringify(o))).toBe(true);
    });

    it('should return `false` for non-isJSONObject', () => {
        expect(isJSONObject(null)).toBe(false);
        expect(isJSONObject({})).toBe(false);
    });
});
