/**
 *  Create by appleex on 2022/4/19 9:52 上午.
 */
import { humanReadableFileSize } from './../lib/util'

describe('humanReadableFileSize', () => {
    it('humanReadableFileSize...', () => {
        // console.log(humanReadableFileSize(10000000));
        expect(humanReadableFileSize(1000)).toEqual('1.0 kB');
    });
});
