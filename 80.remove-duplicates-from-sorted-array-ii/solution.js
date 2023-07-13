const assert = require('node:assert/strict')

var removeDuplicates = function (nums) {
    let slow = 0
    for (let fast = 0; fast < nums.length; fast++) {
        if (fast < 2 || nums[slow - 2] !== nums[fast]) {
            nums[slow] = nums[fast]
            slow++
        }
    }
    return slow
};

(function () {
    // test code here
    console.log('Accepted!')
})()
