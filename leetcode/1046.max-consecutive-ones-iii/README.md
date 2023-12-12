Max Consecutive Ones III
---
### Problem
Given a binary array `nums` and an integer `k`, return *the maximum number of consecutive* `1`*'s in the array if you can flip at most* `k` `0`'s.


 


**Example 1:**



```

**Input:** nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
**Output:** 6
**Explanation:** [1,1,1,0,0,**1**,1,1,1,1,**1**]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
```

**Example 2:**



```

**Input:** nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
**Output:** 10
**Explanation:** [0,0,1,1,**1**,**1**,1,1,1,**1**,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

```

 


**Constraints:**


* `1 <= nums.length <= 105`
* `nums[i]` is either `0` or `1`.
* `0 <= k <= nums.length`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：假如数组中最多有k个元素可以反转为1，计算最大1的连续长度

解题思路：
- 典型的滑动窗口题目，窗口变动的条件为k的余量，k为0，则窗口左指针向右移动

```javascript
var longestOnes = function(nums, k) {
    let l = 0, r = 0
    while(r < nums.length) {
        if(!nums[r]) k --
        if(k < 0) {
            if (!nums[l]) k ++
            l++
        }
        r++
    }
    return r - l
};
```

[Back to list](../README.md)