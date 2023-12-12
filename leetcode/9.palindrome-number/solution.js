const assert = require('node:assert/strict')

var isPalindrome = function (x) {
    x = x.toString()
    let l = 0, r = x.length - 1
    while (l <= r) {
        if (x[l] !== x[r]) return false
        l++
        r--
    }
    return true
};

(function () {
    // test code here
    console.log('Accepted!')
})()
