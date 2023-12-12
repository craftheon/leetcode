const assert = require('node:assert/strict')

var findDifference = function (nums1, nums2) {
    const ans = [[], []]
    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i])) {
            !ans[0].includes(nums1[i]) && ans[0].push(nums1[i])
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (!nums1.includes(nums2[i])) {
            !ans[1].includes(nums2[i]) && ans[1].push(nums2[i])
        }
    }
    return ans
};

(function () {
    // test code here
    console.log('Accepted!')
})()
