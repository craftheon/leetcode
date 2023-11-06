const assert = require('node:assert/strict')

var guessNumber = function (n) {
    const find = function (start, end) {
        const mid = Math.floor((start + end) / 2)
        if (guess(mid) === 0) return mid
        if (guess(mid) === -1) return find(start, mid - 1)
        if (guess(mid) === 1) return find(mid + 1, end)
    }
    return find(0, n)
};
(function () {
    // test code here
    console.log('Accepted!')
})()
