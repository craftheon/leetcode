const assert = require('node:assert/strict')

var addOneRow = function (root, val, depth) {
    if (depth === 1) return new TreeNode(val, root);

    const refactor = (node = root, currentDep = 1) => {
        if (!node) return;
        if (currentDep === depth - 1) {
            const { left, right } = node;
            node.left = new TreeNode(val, left);
            node.right = new TreeNode(val, null, right);
        }
        refactor(node.left, currentDep + 1);
        refactor(node.right, currentDep + 1);
    };
    refactor();
    return root;
};

(function () {
    // test code here
    console.log('Accepted!')
})()
