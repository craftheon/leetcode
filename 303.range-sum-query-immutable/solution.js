const assert = require('node:assert/strict')

var NumArray = function (nums) {
    this.preSum = new Array(nums.length + 1)
    this.preSum[0] = 0;
    for (let i = 1; i < this.preSum.length; i++) {
        this.preSum[i] = this.preSum[i - 1] + nums[i - 1];
    }
};

NumArray.prototype.sumRange = function (left, right) {
    return this.preSum[right + 1] - this.preSum[left];
};

(function () {
    var numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
    assert.deepEqual(numArray.sumRange(0, 2), 1)
    assert.deepEqual(numArray.sumRange(2, 5), -1)
    assert.deepEqual(numArray.sumRange(0, 5), -3)
    console.log('Accepted!')
})()
