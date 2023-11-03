const assert = require('node:assert/strict')

var leafSimilar = function (root1, root2) {
    let seq1 = [], seq2 = []
    var reverse = function (tree, res) {
        if (!tree) return null
        if (tree.left == null && tree.right == null) {
            res.push(tree.val)
            return null
        }
        reverse(tree.left, res)
        reverse(tree.right, res)
    }
    reverse(root1, seq1)
    reverse(root2, seq2)
    if (seq1.length !== seq2.length) return false
    for (let i = 0; i < seq1.length; i++) {
        if (seq1[i] !== seq2[i]) return false
    }
    return true
};

(function () {
    // test code here
    console.log('Accepted!')
})()
