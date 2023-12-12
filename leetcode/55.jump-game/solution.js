const assert = require('node:assert/strict')

var canJump = function (nums) {
    let n = nums.length
    if (n === 0) return false
    if (n === 1) return true
    let maxJump = 0
    for (i = 0; i < nums.length; i++) {
        if (i > maxJump) {
            return false
        }
        maxJump = Math.max(maxJump, i + nums[i])
    }
    return true
};

(function () {
    // test code here
    console.log('Accepted!')
})()
