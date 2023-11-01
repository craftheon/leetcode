Max Number of K-Sum Pairs
---
### Problem
You are given an integer array `nums` and an integer `k`.


In one operation, you can pick two numbers from the array whose sum equals `k` and remove them from the array.


Return *the maximum number of operations you can perform on the array*.


 


**Example 1:**



```

**Input:** nums = [1,2,3,4], k = 5
**Output:** 2
**Explanation:** Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
```

**Example 2:**



```

**Input:** nums = [3,1,3,4,3], k = 6
**Output:** 1
**Explanation:** Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
```

 


**Constraints:**


* `1 <= nums.length <= 105`
* `1 <= nums[i] <= 109`
* `1 <= k <= 109`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：给定数字k，计算数组中两元素相加能组成k的组合数，要求不能重复计算

解题思路：
- 本题是一道双指针经典题目，本题解题思路和[3Sum](../15.3sum/README.md)有些相似之处
- 看到在数组中求某两个元素合的题目要先想到双指针，这类题目一般都要对数组先排序，大部分双指针题目都是需要有序数组的
- 其次确定指针移动条件，一般在计算两元素加合是否等于目标值的题目中判断条件大多是：大于目标值右指针左移，小于目标值左指针右移，等于目标值时两指针同时移动，本题亦是如此。


```javascript
var maxOperations = function (nums, k) {
    let res = 0, l = 0, r = nums.length - 1
    nums.sort((a, b) => a - b)
    while (l < r) {
        const sum = nums[l] + nums[r]
        if (sum === k) {
            res++
            l++
            r--
        } else if (sum < k) {
            l++
        } else {
            r--
        }
    }
    return res
};
```

[Back to list](../README.md)