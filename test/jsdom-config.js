/**
 *  Create by appleex on 2022/4/15 6:25 下午.
 */
var jsdom = require('jsdom'); // eslint-disable-line
var { JSDOM } = jsdom;

var dom = new JSDOM('<!DOCTYPE html><head/><body></body>', {
    url: 'http://localhost/',
    referrer: 'https://example.com/',
    contentType: 'text/html',
    userAgent: 'Mellblomenator/9000',
    includeNodeLocations: true,
    storageQuota: 10000000,
});
global.window = dom.window;
global.document = window.document;
global.navigator = window.navigator;
