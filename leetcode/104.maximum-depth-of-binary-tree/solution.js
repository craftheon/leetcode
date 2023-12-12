const assert = require('node:assert/strict')

var maxDepth = function (root) {
    let res = 0
    let depth = 0
    var tranvse = function (root) {
        if (root === null) {
            return;
        }
        depth++
        res = Math.max(res, depth)
        tranvse(root.left)
        tranvse(root.right)
        depth--
    }

    tranvse(root)
    return res
};

(function () {
    // test code here
    console.log('Accepted!')
})()
