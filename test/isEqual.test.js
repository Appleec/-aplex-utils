/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { isEqual } from './../lib/lang'

describe('isEqual', () => {
    it('should return `true` for isEqual', () => {
        var object = { 'a': 1 };
        var other = { 'a': 1 };
        expect(isEqual(object, other)).toBe(true);
    });

    it('should return `false` for non-isEqual', () => {
        expect(isEqual(1, 3)).toBe(false);
        expect(isEqual([1, 3], [3])).toBe(false);
        expect(isEqual({'a': 1}, {'a': 3})).toBe(false);
    });
});
