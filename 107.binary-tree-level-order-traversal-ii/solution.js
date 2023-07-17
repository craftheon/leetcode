const assert = require('node:assert/strict')

var levelOrderBottom = function (root) {
    if (!root) return [];
    let ans = [], queue = [root];

    while (queue.length) {
        let l = [], len = queue.length;

        for (let i = 0; i < len; i++) {
            const c = queue.shift();
            if (c.left) queue.push(c.left);
            if (c.right) queue.push(c.right);
            l.push(c.val)
        }
        ans.push(l);
    }

    return ans.reverse();
};

(function () {
    // test code here
    console.log('Accepted!')
})()
