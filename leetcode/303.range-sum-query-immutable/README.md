Range Sum Query - Immutable
---
### Problem
Given an integer array `nums`, handle multiple queries of the following type:


1. Calculate the **sum** of the elements of `nums` between indices `left` and `right` **inclusive** where `left <= right`.


Implement the `NumArray` class:


* `NumArray(int[] nums)` Initializes the object with the integer array `nums`.
* `int sumRange(int left, int right)` Returns the **sum** of the elements of `nums` between indices `left` and `right` **inclusive** (i.e. `nums[left] + nums[left + 1] + ... + nums[right]`).


 


**Example 1:**



```

**Input**
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
**Output**
[null, 1, -1, -3]

**Explanation**
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

```

 


**Constraints:**


* `1 <= nums.length <= 104`
* `-105 <= nums[i] <= 105`
* `0 <= left <= right < nums.length`
* At most `104` calls will be made to `sumRange`.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：实现`sumRange`方法，计算区间和。

解题思路：
- 看到计算区间和，尤其是频繁计算不同区间的和的题目，可以首先想到用前缀和来解题；
- 首先计算nums的前缀和数组preSum；
- 前缀和的第一个是0，所以当前区间和就是preSum`right + 1 - left`的值。

```javascript
var NumArray = function(nums) {
    this.preSum = new Array(nums.length + 1)
    this.preSum[0] = 0;
    for (let i = 1; i < this.preSum.length; i++) {
        this.preSum[i] = this.preSum[i - 1] + nums[i - 1];
    }
};

NumArray.prototype.sumRange = function(left, right) {
    return this.preSum[right + 1] - this.preSum[left];
};
```

[Back to list](../README.md)