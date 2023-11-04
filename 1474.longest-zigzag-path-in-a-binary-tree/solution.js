const assert = require('node:assert/strict')

var longestZigZag = function (root) {
    let ans = 0

    const reverse = function (node, flag, level) {
        if (!node) return null
        ans = Math.max(ans, level)
        if (flag === 0) {
            reverse(node.right, 1, level + 1)
            reverse(node.left, 0, 1)
        } else {
            reverse(node.left, 0, level + 1)
            reverse(node.right, 1, 1)
        }

    }

    reverse(root.right, 1, 1)
    reverse(root.left, 0, 1)
    return ans
};
(function () {
    // test code here
    console.log('Accepted!')
})()
