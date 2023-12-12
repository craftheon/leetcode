const assert = require('node:assert/strict')

var checkSubarraySum = function (nums, k) {
    const map = new Map();
    map.set(0, 0);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        sum %= k;
        if (!map.has(sum)) {
            map.set(sum, i + 1);
        }
        else if (map.get(sum) < i) {
            return true;
        }
    }
    return false;
};

(function () {
    // test code here
    console.log('Accepted!')
})()
