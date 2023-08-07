const assert = require('node:assert/strict')

var rotate = function (nums, k) {
    nums.unshift(...nums.splice(-k % nums.length));
};

(function () {
    // test code here
    console.log('Accepted!')
})()
