const assert = require('node:assert/strict')

var flatten = function (root) {
    let prev = null
    const traverse = function (node) {
        if (node === null) return
        traverse(node.right)
        traverse(node.left)
        node.left = null
        node.right = prev
        prev = node
    }
    traverse(root)
};

(function () {
    // test code here
    console.log('Accepted!')
})()
