const assert = require('node:assert/strict')

var getMinimumDifference = function (root) {
    const arr = []
    const reverse = function (node) {
        if (node === null) return null
        reverse(node.left)
        arr.push(node.val)
        reverse(node.right)
    }
    reverse(root)
    let min = arr[1] - arr[0]
    for (let i = 2; i < arr.length; i++) {
        min = Math.min(min, arr[i] - arr[i - 1])
    }
    return min
};

(function () {
    // test code here
    console.log('Accepted!')
})()
