/**
 *  Create by appleex on 2022/4/22 9:52 上午.
 */
import camelCase from './../lib/camelCase'

describe('camelCase', () => {
    it('camelCase...', () => {
        // console.log(camelCase('ab-c'));
        // console.log(camelCase('ab:c'));
        // console.log(camelCase('ab_c'));
        expect(camelCase('ab-c')).toBe('abC');
        expect(camelCase('ab_c')).toBe('abC');
        expect(camelCase('ab:c')).toBe('abC');
    });
});
