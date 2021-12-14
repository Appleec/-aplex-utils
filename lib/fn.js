/**
 *  Create by appleex on 2021/10/15 3:15 下午.
 */
"use strict";

/**
 * @fileOverview This is base definition for all composed classes defined by the system
 * @module function
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
 * mergeDeep
 *
 * @param source
 * @param target
 * @return {{}}
 */
function mergeDeep(source = {}, target = {}) {
    for (const key in target) {
        const sourceProperty = source[key];
        const targetProperty = target[key]; // Only continue deep merging if
        // both properties are objects

        if (__is.isObject(sourceProperty) && __is.isObject(targetProperty)) {
            source[key] = mergeDeep(sourceProperty, targetProperty);
            continue;
        }

        source[key] = targetProperty;
    }

    return source;
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
        return obj
    }

    // if obj is hit, it is in circular structure
    const hit = find(cache, c => c.original === obj)
    if (hit) {
        return hit.copy
    }

    const copy = Array.isArray(obj) ? [] : {}
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
        original: obj,
        copy
    })

    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key], cache)
    })

    return copy
}


__exp.deepCopy = deepCopy;
__exp.mergeDeep = mergeDeep;
__exp.throttle = throttle;
__exp.debounce = debounce;
