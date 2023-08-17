const assert = require('node:assert/strict')

var isPalindrome = function (s) {
    s = s.replace(/[^0-9a-z\u0600-\u06FF]/gi, '').toLowerCase();
    let l = 0, r = s.length - 1
    while (l < r) {
        if (s[l] !== s[r]) return false
        l++
        r--
    }
    return true
};

(function () {
    // test code here
    console.log('Accepted!')
})()
