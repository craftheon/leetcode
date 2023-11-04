Product of Array Except Self
---
### Problem
Given an integer array `nums`, return *an array* `answer` *such that* `answer[i]` *is equal to the product of all the elements of* `nums` *except* `nums[i]`.


The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.


You must write an algorithm that runs in `O(n)` time and without using the division operation.


 


**Example 1:**



```
**Input:** nums = [1,2,3,4]
**Output:** [24,12,8,6]

```
**Example 2:**



```
**Input:** nums = [-1,1,0,-3,3]
**Output:** [0,0,9,0,0]

```

 


**Constraints:**


* `2 <= nums.length <= 105`
* `-30 <= nums[i] <= 30`
* The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.


 


**Follow up:** Can you solve the problem in `O(1)` extra space complexity? (The output array **does not** count as extra space for space complexity analysis.)


### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：一个数组的前缀积和后缀积的乘积

解题思路：
- 先从前到后计算前缀积，再从后到前计算后缀积，最后再从前到后计算两者乘积即可。

```javascript
var productExceptSelf = function (nums) {
    let pre = [], suf = [], res = []

    for (let i = 0; i < nums.length; i++) {
        pre[i] = i === 0 ? 1 : nums[i - 1] * pre[i - 1]
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        suf[i] = (i === nums.length - 1) ? 1 : nums[i + 1] * suf[i + 1]
    }

    for (let i = 0; i < nums.length; i++) {
        res[i] = pre[i] * suf[i]
    }

    return res
};
```

[Back to list](../README.md)