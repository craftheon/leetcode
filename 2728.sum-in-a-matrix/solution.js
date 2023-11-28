const assert = require('node:assert/strict')

var matrixSum = function (nums) {
    let m = nums.length,
        n = nums[0].length,
        sum = 0
    for (let i = 0; i < m; i++) {
        nums[i] = nums[i].sort((a, b) => a - b)
    }
    for (let i = 0; i < n; i++) {
        let tmp = 0
        for (let j = 0; j < m; j++) {
            tmp = Math.max(tmp, nums[j][i])
        }
        sum += tmp
    }
    return sum
};

(function () {
    // test code here
    console.log('Accepted!')
})()
