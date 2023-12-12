const assert = require('node:assert/strict')

var lengthOfLongestSubstring = function (s) {
    let ss = [], max = 0

    for (let i = 0; i < s.length; i++) {
        const idx = ss.indexOf(s[i])
        if (idx !== -1) {
            ss.splice(0, idx + 1)
        }
        ss.push(s[i])
        max = Math.max(ss.length, max)
    }

    return max
};

(function () {
    // test code here
    console.log('Accepted!')
})()
