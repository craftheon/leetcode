const assert = require('node:assert/strict')

var isSubsequence = function (s, t) {
    let idx = 0
    for (let i = 0; i < t.length; i++) {
        if (s[idx] === t[i]) {
            idx++
        }
    }
    return idx === s.length
};

(function () {
    // test code here
    console.log('Accepted!')
})()
