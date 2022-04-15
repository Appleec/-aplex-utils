/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { random } from './../lib/number'

describe('random', () => {
    it('should return random()', () => {
        var isTrue = [0, 5].includes(random(0, 5));
        expect(isTrue).toBe(true);
    });
});
