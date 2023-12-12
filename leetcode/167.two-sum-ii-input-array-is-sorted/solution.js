const assert = require('node:assert/strict')

var twoSum = function (numbers, target) {
    let n = numbers.length
    let l = 0, r = n - 1
    while (l < r) {
        let sum = numbers[l] + numbers[r]
        if (sum === target) {
            return [l + 1, r + 1]
        } else if (sum > target) {
            r--
        } else {
            l++
        }
    }
    return []
};

(function () {
    // test code here
    console.log('Accepted!')
})()
