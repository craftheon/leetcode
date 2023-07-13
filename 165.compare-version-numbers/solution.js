const assert = require('node:assert/strict')

var compareVersion = function (version1, version2) {
    let v1 = version1.split('.'),
        v2 = version2.split('.'),
        len = Math.max(v1.length, v2.length)
    for (let i = 0; i < len; i++) {
        if ((+v1[i] || 0) > (+v2[i] || 0)) return 1
        if ((+v1[i] || 0) < (+v2[i] || 0)) return -1
    }
    return 0;
};

(function () {
    // test code here
    console.log('Accepted!')
})()
