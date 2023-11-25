const assert = require('node:assert/strict')

var jump = function (nums) {
    let ans = 0, jp = 0, far = 0
    for (let i = 0; i < nums.length - 1; i++) {
        jp = Math.max(jp, nums[i] + i)
        if (i === far) {
            far = jp
            ans++
        }
    }
    return ans
};

(function () {
    // test code here
    console.log('Accepted!')
})()
