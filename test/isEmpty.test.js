/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { isEmpty } from './../lib/lang'

describe('isEmpty', () => {
    it('should return `true` for isEmpty', () => {
        expect(isEmpty()).toBe(true);
    });

    it('should return `false` for non-isEmpty', () => {
        expect(isEmpty({a: 1})).toBe(false);
    });
});
