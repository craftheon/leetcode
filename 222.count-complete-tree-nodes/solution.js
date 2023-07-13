const assert = require('node:assert/strict')

var countNodes = function (root) {
    if (root === null) return 0
    return countNodes(root.left) + countNodes(root.right) + 1
};

(function () {
    // test code here
    console.log('Accepted!')
})()
