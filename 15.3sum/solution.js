const assert = require('node:assert/strict')

var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    const res = []
    for (let i = 0; i < nums.length; i++) {
        let l = i + 1, r = nums.length - 1
        if (nums[i] > 0) {
            return res;
        }
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum > 0) {
                r--
            } else if (sum < 0) {
                l++
            } else {
                res.push([nums[i], nums[l], nums[r]])
                while (r > l && nums[r] == nums[r - 1]) r--;
                while (r > l && nums[l] == nums[l + 1]) l++;
                r--;
                l++;
            }
        }
    }
    return res
};

(function () {
    assert.deepEqual(threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]])
    console.log('Accepted!')
})()
