const assert = require('node:assert/strict')

var kthSmallest = function (root, k) {
    const arr = []
    const reverse = function (node) {
        if (node === null) return null
        reverse(node.left)
        arr.push(node.val)
        reverse(node.right)
    }
    reverse(root)
    return arr[k - 1]
};

(function () {
    // test code here
    console.log('Accepted!')
})()
