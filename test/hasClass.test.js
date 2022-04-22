/**
 *  Create by appleex on 2022/4/13 9:52 上午.
 */
import { hasClass } from './../lib/dom'

describe('hasClass', () => {
    it('hasClass...', () => {
        document.body.innerHTML = '<div class="wrapper"></div>';
        var _wrapper = document.querySelector('.wrapper');

        expect(hasClass(_wrapper, 'wrapper')).toBeTruthy();
    });
});
