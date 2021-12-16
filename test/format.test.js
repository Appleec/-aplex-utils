/**
 * Created by appleex on 2020/5/9
 */
const __format = require('../lib/format')

describe('/** __format **/', () => {

    test('__format.sortObject', () => {
        const a = { a: 1, c: 2 };
        // console.log(__format.sortObject(a, 'desc'));
        expect(__format.sortObject(a, 'desc')).toEqual({a: 1, c: 2});
    });

    test('__format.time', () => {
        const d = new Date();
        console.log(__format.parseTime(d, 'YYYY-MM-DD hh:mm:ss a q S'));
        console.log(__format.currentTimeStr());
        console.log(__format.currentTime());
        console.log(__format.formatTime(1639558596816));
        console.log(__format.formatTimeToHM(new Date(), 10));
        // expect(__format.parseTime(d, 'YYYY-MM-DD')).toEqual({a: 1, c: 2});
    });
});

