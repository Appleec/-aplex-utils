/**
 * Created by appleex on 2020/2/18
 */
"use strict";

Date.prototype.format = function (regex) {
    let o = {
        "M+": this.getMonth() + 1,// month
        "D+": this.getDate(), // day
        "h+": this.getHours(), // hours
        "m+": this.getMinutes(), // minute
        "s+": this.getSeconds(), // second
        "q+": Math.floor((this.getMonth() + 3) / 3), //
        "S": this.getMilliseconds() // millisecond
    };
    if (/(Y+)/.test(regex)) {
        regex = regex.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        let _regex = new RegExp(`(${k})`);
        if (_regex.test(regex)) {
            regex = regex.replace(RegExp.$1,
                (RegExp.$1.length === 1) ? (o[k]) : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return regex;
};

const helper = module.exports;

module.exports.isRealNumber = (val) => {
    if (val === '' || val == null) {
        return false
    }
    return !isNaN(val)
}

if (process.argv.length > 1 && /helper/.test(process.argv[1])) {
    // console.log('helper')
    // console.log(helper.isRealNumber(4))
}
