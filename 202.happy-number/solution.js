const assert = require('node:assert/strict')

var isHappy = function (n) {
    const set = new Set()
    let sum = n

    while (sum !== 1) {
        let newSum = 0
        sum.toString().split('').forEach(v => newSum += v * v)

        if (set.has(newSum)) return false
        set.add(newSum)
        sum = newSum
    }

    return true
};

(function () {
    // test code here
    console.log('Accepted!')
})()
