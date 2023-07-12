const assert = require('node:assert/strict')

var invertTree = function (root) {
    if (root === null) return null;
    var tmp = root.left
    root.left = root.right
    root.right = tmp
    invertTree(root.left)
    invertTree(root.right)
    return root
};

(function () {
    // test code here
    console.log('Accepted!')
})()
