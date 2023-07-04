3Sum Closest
---
### Problem
Given an integer array `nums` of length `n` and an integer `target`, find three integers in `nums` such that the sum is closest to `target`.


Return *the sum of the three integers*.


You may assume that each input would have exactly one solution.


 


**Example 1:**



```

**Input:** nums = [-1,2,1,-4], target = 1
**Output:** 2
**Explanation:** The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

```

**Example 2:**



```

**Input:** nums = [0,0,0], target = 1
**Output:** 0
**Explanation:** The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

```

 


**Constraints:**


* `3 <= nums.length <= 500`
* `-1000 <= nums[i] <= 1000`
* `-104 <= target <= 104`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：找到和target最相近的三数之和，意味着所有的三数之和中，保留和target差值的绝对值最小的即为答案。

解题思路：
- 依次计算差值绝对值，保留绝对值最小的结果；
- 指针移动条件：三数之和大于target 左指针移动、小于target右指针移动。
- 绝对值的初始值：开始我设置的abs初始值是0，这会导致第一次判断`Math.abs(sum - target) < abs` 时被跳过，因为这里成立的条件永远是当前sun-target的绝对值要小于那个最小的，但最小的绝对值也不会小于0。
- 去重：这道题中去不去重其实都可以，去重可以增加一些计算速度，但不去重也不会影响计算结果，最多是相同的结果被重复计算了一遍。

```javascript
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let res = 0, abs = Number.MAX_VALUE
    for(let i = 0; i < nums.length; i ++) {
        let l = i + 1, r = nums.length - 1
        if (i > 0 && nums[i] == nums[i - 1]) {
		    continue
		}
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            const a = Math.abs(sum - target)
            if (a < abs) {
                abs = a
                res = sum
            }
            if (sum > target) {
                r --
            } else {
                l ++
            }
        }
    }
    return res
};
```

[Back to list](../README.md)