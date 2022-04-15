/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { isURL } from './../lib/lang'

describe('isURL', () => {
    it('should return `true` for isURL', () => {
        expect(isURL('https://www.baidu.com')).toBe(true);
    });

    it('should return `false` for non-isURL', () => {
        expect(isURL('https://127.0.0.1')).toBe(false);
        expect(isURL('')).toBe(false);
    });
});
