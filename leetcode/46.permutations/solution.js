const assert = require('node:assert/strict')

var permute = function (nums) {
    const ans = [];
    const backtrack = (path) => {
        if (path.length === nums.length) {
            ans.push([...path])
        }

        for (const n of nums) {
            if (path.includes(n)) {
                continue
            }
            path.push(n);
            backtrack(path);
            path.pop();
        };
    };
    backtrack([]);
    return ans;
};

(function () {
    // test code here
    console.log('Accepted!')
})()
