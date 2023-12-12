const assert = require('node:assert/strict')

var averageOfLevels = function (root) {
    let levels = [], ans = []
    const reverse = function (node, h) {
        if (node === null) return null
        levels[h] = Array.isArray(levels[h]) ? levels[h].concat([node.val]) : [node.val]
        reverse(node.left, h + 1)
        reverse(node.right, h + 1)
    }
    reverse(root, 0)
    for (let i = 0; i < levels.length; i++) {
        const cur = levels[i]
        ans.push(cur.reduce((p, c) => p + c) / cur.length)
    }
    return ans
};

(function () {
    // test code here
    console.log('Accepted!')
})()
