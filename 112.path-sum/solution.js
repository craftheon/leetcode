const assert = require('node:assert/strict')

var hasPathSum = function (root, targetSum) {
    let res = false
    var reverse = function (node, val) {
        if (node?.val || node?.val === 0) {
            node.val += val
        }
        if (!node?.left && !node?.right && node?.val === targetSum) {
            res = true
        }
        if (node?.left) {
            reverse(node.left, node.val)
        }
        if (node?.right) {
            reverse(node.right, node.val)
        }
    }
    reverse(root, 0)
    return res
};

(function () {
    // test code here
    console.log('Accepted!')
})()
