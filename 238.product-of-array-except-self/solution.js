const assert = require('node:assert/strict')

var productExceptSelf = function (nums) {
    let pre = [], suf = [], res = []

    for (let i = 0; i < nums.length; i++) {
        pre[i] = i === 0 ? 1 : nums[i - 1] * pre[i - 1]
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        suf[i] = (i === nums.length - 1) ? 1 : nums[i + 1] * suf[i + 1]
    }

    for (let i = 0; i < nums.length; i++) {
        res[i] = pre[i] * suf[i]
    }

    return res
};

(function () {
    // test code here
    console.log('Accepted!')
})()
