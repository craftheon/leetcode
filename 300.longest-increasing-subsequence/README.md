Longest Increasing Subsequence
---
### Problem
Given an integer array `nums`, return *the length of the longest **strictly increasing*** ***subsequence***.


 


**Example 1:**



```

**Input:** nums = [10,9,2,5,3,7,101,18]
**Output:** 4
**Explanation:** The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

```

**Example 2:**



```

**Input:** nums = [0,1,0,3,2,3]
**Output:** 4

```

**Example 3:**



```

**Input:** nums = [7,7,7,7,7,7,7]
**Output:** 1

```

 


**Constraints:**


* `1 <= nums.length <= 2500`
* `-104 <= nums[i] <= 104`


 


**Follow up:** Can you come up with an algorithm that runs in `O(n log(n))` time complexity?


### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：最长连续子序列

解题思路：
- 动态规划

```javascript
var lengthOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1)

    for(let i = 0; i < nums.length; i ++) {
        for(let j = 0; j < i; j ++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    let res = 0;
    for (let i = 0; i < dp.length; i++) {
        res = Math.max(res, dp[i]);
    }
    return res;
};
```

[Back to list](../README.md)