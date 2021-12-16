/**
 * Created by appleex on 2020/5/9
 */
const __get = require('../lib/get')

describe('/** __get **/', () => {

    test('__get.<name>', () => {
        console.log(__get.byteLength('011'));
        console.log(__get.createUniqueString());
    });
});

