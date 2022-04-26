/**
 *  Create by appleex on 2022/4/22 3:53 下午.
 */
'use strict';

var camelCase = require('./camelCase');
var ieVersion = document.documentMode ? Number(document.documentMode) : 0;


/**
 * setStyle
 *
 * @summary setStyle
 * @since 2.0.0
 * @param {HTMLDocument} el HTMLDocument
 * @param {string} styleName Name
 * @param {string} value Value
 */
function setStyle(el, styleName, value) {
    if (!el || !styleName) return;

    if (typeof styleName === 'object') {
        for (var prop in styleName) {
            // eslint-disable-next-line no-prototype-builtins
            if (styleName.hasOwnProperty(prop)) {
                setStyle(el, prop, styleName[prop]);
            }
        }
    } else {
        styleName = camelCase(styleName);
        if (styleName === 'opacity' && ieVersion < 9) {
            el.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
        } else {
            el.style[styleName] = value;
        }
    }
}

module.exports = setStyle;
