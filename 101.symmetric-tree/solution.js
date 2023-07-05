const assert = require('node:assert/strict')

var isSymmetric = function (root) {
    if (!root) {
        return true
    }
    return isSame(root.left, root.right)
};

var isSame = function (left, right) {
    if ((!left && right) || (left && !right) || (left && right && left.val !== right.val)) {
        return false;
    }
    if (left && right) {
        return isSame(left.left, right.right) && isSame(left.right, right.left);
    }
    return true;
};

(function () {
    // test code here
    console.log('Accepted!')
})()
