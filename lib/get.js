/**
 *  Create by appleex on 2021/10/15 3:15 下午.
 */
"use strict";

/**
 * @fileOverview This is base definition for all composed classes defined by the system
 * @module get
 * @requires helper
 */

var __exp = module.exports;

/**
 * keyCodes
 *
 * @type {Readonly<{insert: number, del: number, right: number, pageup: number, delete: number, down: number, space: number, home: number, pagedown: number, backspace: number, tab: number, esc: number, left: number, end: number, enter: number, up: number}>}
 */
var keyCodes = Object.freeze({
    enter: 13,
    tab: 9,
    delete: 46,
    esc: 27,
    space: 32,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    end: 35,
    home: 36,
    del: 46,
    backspace: 8,
    insert: 45,
    pageup: 33,
    pagedown: 34
});


__exp.keyCodes = keyCodes;
