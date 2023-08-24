const assert = require('node:assert/strict')

var isValidBST = function (root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};

(function () {
    // test code here
    console.log('Accepted!')
})()
