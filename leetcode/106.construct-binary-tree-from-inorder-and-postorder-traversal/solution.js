const assert = require('node:assert/strict')

var buildTree = function (inorder, postorder) {
    function build(arr) {
        if (!arr.length) return null;
        const val = postorder.pop();
        const idx = arr.indexOf(val);
        const node = new TreeNode(val);
        node.right = build(arr.slice(idx + 1));
        node.left = build(arr.slice(0, idx));
        return node;
    }
    return build(inorder);
};

(function () {
    // test code here
    console.log('Accepted!')
})()
