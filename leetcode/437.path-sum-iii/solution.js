const assert = require('node:assert/strict')

var pathSum = function (root, targetSum) {
    let ans = 0
    function count(tree, sum) {
        if (!tree) return
        sum += tree.val
        if (sum === targetSum) {
            ans++
        }
        count(tree.left, sum)
        count(tree.right, sum)
    }
    (function dfs(tree) {
        if (!tree) return
        count(tree, 0)
        dfs(tree.left)
        dfs(tree.right)
    })(root)
    return ans
};

(function () {
    // test code here
    console.log('Accepted!')
})()
