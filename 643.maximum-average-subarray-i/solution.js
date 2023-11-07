const assert = require('node:assert/strict')

var findMaxAverage = function (nums, k) {
    let ans = -Infinity,
        l = 0,
        r = 0,
        tmp = 0
    while (r < nums.length) {
        const len = r - l + 1
        tmp += nums[r]
        if (len === k) {
            ans = Math.max(ans, tmp / k)
            tmp -= nums[l]
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
