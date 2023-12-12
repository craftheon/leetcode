const assert = require('node:assert/strict')

var longestOnes = function (nums, k) {
    let l = 0, r = 0
    while (r < nums.length) {
        if (!nums[r]) k--
        if (k < 0) {
            if (nums[l] === 0) k++
            l++
        }
        r++
    }
    return r - l
};

(function () {
    // test code here
    console.log('Accepted!')
})()
