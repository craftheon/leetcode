const assert = require('node:assert/strict')

var goodNodes = function (root) {
    let ans = 0
    const reverse = function (tree, max) {
        if (!tree) return null
        if (tree.val >= max) ++ans
        max = Math.max(max, tree.val)
        reverse(tree.left, max)
        reverse(tree.right, max)
    }
    reverse(root, root.val)
    return ans
};

(function () {
    // test code here
    console.log('Accepted!')
})()
