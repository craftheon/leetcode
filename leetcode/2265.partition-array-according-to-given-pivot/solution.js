const assert = require('node:assert/strict')

var pivotArray = function (nums, pivot) {
    let l = [], m = [], r = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            l.push(nums[i])
        } else if (nums[i] > pivot) {
            r.push(nums[i])
        } else {
            m.push(nums[i])
        }
    }
    return l.concat(m, r)
};

(function () {
    // test code here
    console.log('Accepted!')
})()
