const assert = require('node:assert/strict')

var maxVowels = function (s, k) {
    let ans = 0,
        l = 0,
        r = 0,
        t = 0
    const vlm = ["a", "e", "i", "o", "u"];
    while (r <= s.length) {
        vlm.includes(s[r]) && t++
        ans = Math.max(ans, t)
        if (r - l + 1 == k) {
            vlm.includes(s[l]) && t--
            l++
        }
        r++
    }
    return ans
};

(function () {
    // test code here
    console.log('Accepted!')
})()
