Maximum Average Subarray I
---
### Problem
You are given an integer array `nums` consisting of `n` elements, and an integer `k`.


Find a contiguous subarray whose **length is equal to** `k` that has the maximum average value and return *this value*. Any answer with a calculation error less than `10-5` will be accepted.


 


**Example 1:**



```

**Input:** nums = [1,12,-5,-6,50,3], k = 4
**Output:** 12.75000
**Explanation:** Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

```

**Example 2:**



```

**Input:** nums = [5], k = 1
**Output:** 5.00000

```

 


**Constraints:**


* `n == nums.length`
* `1 <= k <= n <= 105`
* `-104 <= nums[i] <= 104`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：求k长度区间内的最大平均数

解题思路：
- 滑动窗口思路，r指针一直右移，l指针移动的条件为`r - l + 1 === k`, 循环结束的条件为r指针遍历结束
- l指针移动时，tmp要减掉l指针对应的元素

```javascript
var findMaxAverage = function (nums, k) {
    let ans = -Infinity,
        l = 0,
        r = 0,
        tmp = 0
    while (r < nums.length) {
        const len = r - l + 1
        tmp += nums[r]
        if (len === k) {
            ans = Math.max(ans, tmp / k)
            tmp -= nums[l]
            l++
        }
        r++
    }
    return ans
};
```

[Back to list](../README.md)