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

/**
 * random
 *
 * @param {number} min minValue
 * @param {number} max maxValue
 * @return {*}
 */
function random(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

/**
 * randomWord
 *
 * @param  {boolean} randomFlag 是否任意长度
 * @param  {number}  min        任意长度最小位[固定位数]
 * @param  {number}  max        任意长度最大位
 * @return {string}             固定/随机长度字符串
 */
function randomWord(randomFlag, min, max) {
    const arr = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
        'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    ];
    let range = min;
    let str = '';

    // 随机产生
    if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min;
    }

    for (let i = 0; i < range; i += 1) {
        const pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }

    return str;
}

/**
 * randomPassword
 * 生成随机密码
 *
 * @return {string}
 */
function randomPassword() {
    const source = ['0123456789', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    const pswLength = random(5, 7);
    let psw = '';

    for (let i = 0; i < pswLength; i += 1) {
        const item = source[random(0, 2)];
        psw += item.charAt(random(0, item.length - 1));
    }

    for (let j = 0; j < 3; j += 1) {
        const charac = source[j].charAt(random(0, source[j].length - 1));
        const randomSplit = random(0, source[j].length - 1);
        psw = [psw.slice(0, randomSplit), charac, psw.slice(randomSplit)].join('');
    }

    return psw;
}

__exp.randomPassword = randomPassword;
__exp.randomWord = randomWord;
__exp.random = random;
__exp.keyCodes = keyCodes;
