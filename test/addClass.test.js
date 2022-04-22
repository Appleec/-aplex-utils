/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { addClass } from './../lib/dom'

describe('addClass', () => {
    it('should addClass', () => {
        document.body.innerHTML = '<div id="wrapper"></div>';
        var _wrapper = document.querySelector('#wrapper');

        addClass(_wrapper, 'test');

        var _test = document.querySelector('.test');

        expect(_test).not.toBeNull();
    });
});
