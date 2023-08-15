const assert = require('node:assert/strict')

var constructMaximumBinaryTree = function (nums) {
    const build = function (lo, hi) {
        if (lo > hi) return null
        let index = -1, maxVal = Number.MIN_SAFE_INTEGER;
        for (let i = lo; i <= hi; i++) {
            if (maxVal < nums[i]) {
                index = i
                maxVal = nums[i]
            }
        }
        const root = new TreeNode(maxVal)
        root.left = build(lo, index - 1)
        root.right = build(index + 1, hi)
        return root
    }
    return build(0, nums.length - 1)
};

(function () {
    // test code here
    console.log('Accepted!')
})()
