const assert = require('node:assert/strict')

var preorderTraversal = function (root) {
    if (root === null) return []
    var left = preorderTraversal(root.left)
    var right = preorderTraversal(root.right)
    return [root.val].concat(left, right)
};

(function () {
    // test code here
    console.log('Accepted!')
})()
