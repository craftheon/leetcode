const assert = require('node:assert/strict')

var validPalindrome = function (s) {
    function isPolindrom(l, r) {
        while (l < r) {
            if (s[l++] !== s[r--]) {
                return false
            }
        }
        return true
    }

    let l = 0, r = s.length - 1

    while (l < r) {
        if (s[l] !== s[r]) return isPolindrom(l + 1, r) || isPolindrom(l, r - 1)
        l++;
        r--;
    }
    return true
};

(function () {
    // test code here
    console.log('Accepted!')
})()
