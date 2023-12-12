const assert = require('node:assert/strict')

var findTilt = function (root) {
    let total = 0;
    const dfs = (node) => {
        if (!node) return 0;
        let left = dfs(node.left)
        let right = dfs(node.right)
        total += Math.abs(right - left);
        return node.val + left + right
    }
    dfs(root);
    return total
};

(function () {
    // test code here
    console.log('Accepted!')
})()
