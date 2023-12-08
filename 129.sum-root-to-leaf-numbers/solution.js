const assert = require('node:assert/strict')

var sumNumbers = function (root) {
    const dfs = (root, path) => {
        if (root == null) return 0;
        path = path * 10 + root.val;
        if (!root.left && !root.right) return path;
        return dfs(root.left, path) + dfs(root.right, path);
    };
    return dfs(root, 0);
};
(function () {
    // test code here
    console.log('Accepted!')
})()
