/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { debounce } from './../lib/function'

describe('debounce', () => {
    it('should debounce a function...', (done) => {
        var callCount = 0;

        var debounced = debounce(function(value) {
            ++callCount;
            return value;
        }, 32);

        var results = [debounced('a'), debounced('b'), debounced('c')];
        // console.log(results);
        expect(results).toStrictEqual([undefined, undefined, undefined]);
        expect(callCount).toEqual(0);
    });
});
