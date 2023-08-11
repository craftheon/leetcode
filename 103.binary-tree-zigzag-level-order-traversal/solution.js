const assert = require('node:assert/strict')

var zigzagLevelOrder = function (root) {
    let ans = []
    const reverse = function (node, h) {
        if (node === null) return null
        ans[h] = Array.isArray(ans[h]) ? ans[h].concat([node.val]) : [node.val]
        reverse(node.left, h + 1)
        reverse(node.right, h + 1)
    }
    reverse(root, 0)
    for (let i = 0; i < ans.length; i++) {
        if (i % 2 !== 0) {
            ans[i] = ans[i].reverse()
        }
    }
    return ans
};

(function () {
    // test code here
    console.log('Accepted!')
})()
