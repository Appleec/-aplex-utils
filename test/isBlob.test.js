/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { Blob } from 'blob-polyfill'
import { isBlob } from './../lib/lang'

describe('isBlob', () => {
    it('should return `true` for isBlob', () => {
        var aFileParts = ['<a id="a"><b id="b">hey!</b></a>']; // 一个包含DOMString的数组
        var oMyBlob = new Blob(aFileParts, {type : 'text/html'}); // 得到 blob

        expect(isBlob(oMyBlob)).toBe(true);
    });

    it('should return `false` for non-isBlob', () => {
        expect(isBlob(null)).toBe(false);
        expect(isBlob(undefined)).toBe(false);
        expect(isBlob(NaN)).toBe(false);
        expect(isBlob('')).toBe(false);
    });
});
