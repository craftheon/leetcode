const assert = require('node:assert/strict')

var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    let res = 0, abs = Number.MAX_VALUE
    for (let i = 0; i < nums.length; i++) {
        let l = i + 1, r = nums.length - 1
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue
        }
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            const a = Math.abs(sum - target)
            if (a < abs) {
                abs = a
                res = sum
            }
            if (sum > target) {
                r--
            } else {
                l++
            }
        }
    }
    return res
};

(function () {
    assert.deepEqual(threeSumClosest([-1, 2, 1, -4], 1), 2)
    console.log('Accepted!')
})()
