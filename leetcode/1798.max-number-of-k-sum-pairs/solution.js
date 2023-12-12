const assert = require('node:assert/strict')

var maxOperations = function (nums, k) {
    let res = 0, l = 0, r = nums.length - 1
    nums.sort((a, b) => a - b)
    while (l < r) {
        const sum = nums[l] + nums[r]
        if (sum === k) {
            res++
            l++
            r--
        } else if (sum < k) {
            l++
        } else {
            r--
        }
    }
    return res
};

(function () {
    // test code here
    console.log('Accepted!')
})()
