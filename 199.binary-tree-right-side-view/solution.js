const assert = require('node:assert/strict')

var rightSideView = function (root) {
    if (!root) return []
    let res = []
    const reverse = function (node, h) {
        if (!node) return null
        res[h] = node.val
        reverse(node.left, h + 1)
        reverse(node.right, h + 1)
    }
    reverse(root, 0)
    return res
};

(function () {
    // test code here
    console.log('Accepted!')
})()
