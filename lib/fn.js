/**
 *  Create by appleex on 2021/10/15 3:15 下午.
 */
"use strict";

/**
 * @fileOverview This is base definition for all composed classes defined by the system
 * @module fn
 * @requires helper
 */

var __is = require('./is');
var __exp = module.exports;

/**
 * debounce
 *
 * @param fn
 * @param delay
 * @returns {Function}
 */
function debounce(fn, delay) {
    let timeoutId = 0;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

/**
 * throttle
 *
 * @param fn
 * @param limit
 * @return {Function}
 */
function throttle(fn, limit) {
    var throttling = false;
    return function () {
        if (!throttling) {
            throttling = true;
            setTimeout(function () {
                return throttling = false;
            }, limit);
            return fn.apply(void 0, arguments);
        }
    };
}

/**
 * deepMerge
 *
 * @param source
 * @param target
 * @return {{}}
 */
function deepMerge(source = {}, target = {}) {
    for (const key in target) {
        const sourceProperty = source[key];
        const targetProperty = target[key]; // Only continue deep merging if
        // both properties are objects

        if (__is.isObject(sourceProperty) && __is.isObject(targetProperty)) {
            source[key] = deepMerge(sourceProperty, targetProperty);
            continue;
        }

        source[key] = targetProperty;
    }

    return source;
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find(list, f) {
    return list.filter(f)[0]
}

/**
 * deepCopy
 *
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy(obj, cache = []) {
    // just return if obj is immutable value
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // if obj is hit, it is in circular structure
    const hit = find(cache, c => c.original === obj);
    if (hit) {
        return hit.copy;
    }

    const copy = Array.isArray(obj) ? [] : {};
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
        original: obj,
        copy
    });

    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key], cache);
    });

    return copy;
}

/**
 * simpleDeepCopy
 *
 * @param {Object} obj - Object
 * @return {any}
 */
function simpleDeepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * compare
 *
 * @param {any} a - any
 * @param {any} b - any
 * @return {number}
 */
function compare(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b);
    }

    if (typeof a === 'boolean' && typeof b === 'boolean') {
        if (a > b) {
            return 1;
        }

        if (a < b) {
            return -1;
        }

        return 0;
    }
    if (typeof a === 'number' && typeof b === 'number') {
        if (a > b) {
            return 1;
        }

        if (a < b) {
            return -1;
        }

        return 0;
    }

    if (typeof a === 'number' && typeof b === 'string') {
        return -1;
    }

    if (typeof a === 'string' && typeof b === 'number') {
        return 1;
    }

    if (typeof a === 'object' && typeof b === 'string') {
        return -1;
    }

    if (typeof a === 'string' && typeof b === 'object') {
        return 1;
    }

    return 1;
}

/**
 * addCommas
 *
 * @param val
 * @return {string|*}
 */
function addCommas(val) {
    if (val === '-') {
        return val;
    }

    let valStr = val.toString();
    let flag = false;

    if (valStr.slice(-1) === '%') {
        flag = true;
        valStr = valStr.slice(0, -1);
    }

    const aIntNum = valStr.split('.');

    aIntNum[0] = aIntNum[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    // if (aIntNum[0].length >= 5) {
    // }

    if (aIntNum[1] && aIntNum[1].length >= 5) {
        aIntNum[1] = aIntNum[1].replace(/(\d{3})/g, '$1 ');
    }

    return flag ? `${aIntNum.join('.')}%` : aIntNum.join('.');
}


/**
 * stopBubble
 * @desc 阻止浏览器的冒泡行为
 * @param {*} e
 */
function stopBubble(e) {
    e = e || window.event;
    e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
}

/**
 * stopDefault
 * @desc 阻止浏览器的默认行为
 * @param {*} e
 */
function stopDefault(e) {
    e = e || window.event;
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}

/**
 * smooth scroll to
 * Smoothly scroll element to the given target (element.scrollTop) for the given duration
 * Returns a promise that's fulfilled when done, or rejected if interrupted
 * @param {DOMel} element
 * @param {String} target
 * @param {Number} duration
 */
function smoothScrollTo(element, target, duration) {
    target = Math.round(target);
    duration = Math.round(duration);
    if (duration < 0) {
        return Promise.reject("bad duration");
    }

    if (duration === 0) {
        element.scrollTop = target;
        return Promise.resolve();
    }

    const start_time = Date.now();
    const end_time = start_time + duration;

    const start_top = element.scrollTop;
    const distance = target - start_top;

    // based on http://en.wikipedia.org/wiki/Smoothstep
    const smooth_step = function (start, end, point) {
        if (point <= start) {
            return 0;
        }

        if (point >= end) {
            return 1;
        }

        const x = (point - start) / (end - start); // interpolation
        return x * x * (3 - 2 * x);
    };

    return new Promise(function (resolve, reject) {
        // This is to keep track of where the element's scrollTop is
        // supposed to be, based on what we're doing
        let previous_top = element.scrollTop;

        // This is like a think function from a game loop
        const scroll_frame = function () {
            if (element.scrollTop !== previous_top) {
                reject("interrupted");
                return;
            }

            // set the scrollTop for this frame
            const now = Date.now();
            const point = smooth_step(start_time, end_time, now);
            const frameTop = Math.round(start_top + (distance * point));
            element.scrollTop = frameTop;

            // check if we're done!
            if (now >= end_time) {
                resolve();
                return;
            }

            // If we were supposed to scroll but didn't, then we
            // probably hit the limit, so consider it done; not
            // interrupted.
            if (element.scrollTop === previous_top &&
                element.scrollTop !== frameTop) {
                resolve();
                return;
            }

            previous_top = element.scrollTop;

            // schedule next frame for execution
            setTimeout(scroll_frame, 0);
        };

        // bootstrap the animation process
        setTimeout(scroll_frame, 0);
    });
}

/**
 * hasClass
 * @desc Check if an element has a class
 *
 * @param {HTMLElement} ele - HTMLElement
 * @param {string} className - className
 * @return {boolean}
 */
function hasClass(ele, className){
    return !!ele.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

/**
 * addClass
 *
 * @description Add class to element
 * @param {HTMLElement} ele - HTMLElement
 * @param {string} className - className
 */
function addClass(ele, className){
    if (!hasClass(ele, className)) { ele.className += ' ' + className; }
}

/**
 * removeClass
 *
 * @description Remove class from element
 * @param {HTMLElement} ele - HTMLElement
 * @param {string} className - className
 */
function removeClass(ele, className){
    if (hasClass(ele, className)) {
        const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

/**
 * toggleClass
 * @desc Toggle class for the selected element
 *
 * @param {HTMLElement} ele - HTMLElement
 * @param {string} className - className
 */
function toggleClass(ele, className){
    if (!ele || !className) {
        return;
    }
    let classString = ele.className;
    const nameIndex = classString.indexOf(className);
    if (nameIndex === -1) {
        classString += '' + className;
    } else {
        classString =
            classString.substr(0, nameIndex) +
            classString.substr(nameIndex + className.length);
    }
    ele.className = classString;
}

/**
 * toggleFullScreen
 */
function toggleFullScreen(){
    let doc = window.document;
    let docEl = doc.documentElement;

    let requestFullScreen =
        docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    let cancelFullScreen =
        doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    } else {
        cancelFullScreen.call(doc);
    }
}

/**
 * uniqueArr
 *
 * @param {Array} arr - array
 * @returns {Array}
 */
export function uniqueArr(arr) {
    return Array.from(new Set(arr));
}

/**
 * deepEqual
 *
 * @param {*} a - any
 * @param {*} b - any
 * @return {boolean}
 */
function deepEqual(a, b) {
    if (a === b) return true;
    if (a instanceof Date && b instanceof Date) {
        if (a.getTime() !== b.getTime()) return false;
    }

    if (a !== Object(a) || b !== Object(b)) {
        return false;
    }

    const props = Object.keys(a);
    if (props.length !== Object.keys(b).length) {
        return false;
    }

    return props.every(p => deepEqual(a[p], b[p]));
}


__exp.deepEqual = deepEqual;
__exp.uniqueArr = uniqueArr;
__exp.addCommas = addCommas;
__exp.compare = compare;
__exp.simpleDeepCopy = simpleDeepCopy;
__exp.deepCopy = deepCopy;
__exp.deepMerge = deepMerge;
__exp.throttle = throttle;
__exp.debounce = debounce;

// window
__exp.hasClass = hasClass;
__exp.addClass = addClass;
__exp.toggleFullScreen = toggleFullScreen;
__exp.toggleClass = toggleClass;
__exp.removeClass = removeClass;
__exp.smoothScrollTo = smoothScrollTo;
__exp.stopDefault = stopDefault;
__exp.stopBubble = stopBubble;
