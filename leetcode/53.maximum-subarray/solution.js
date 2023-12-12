const assert = require('node:assert/strict')

var maxSubArray = function (nums) {
    let max = nums[0],
        sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (sum > max) {
            max = sum
        }
        if (sum < 0) {
            sum = 0
        }
    }
    return max
};

(function () {
    // test code here
    console.log('Accepted!')
})()
