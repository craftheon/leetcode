House Robber
---
### Problem
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.


Given an integer array `nums` representing the amount of money of each house, return *the maximum amount of money you can rob tonight **without alerting the police***.


 


**Example 1:**



```

**Input:** nums = [1,2,3,1]
**Output:** 4
**Explanation:** Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

```

**Example 2:**



```

**Input:** nums = [2,7,9,3,1]
**Output:** 12
**Explanation:** Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

```

 


**Constraints:**


* `1 <= nums.length <= 100`
* `0 <= nums[i] <= 400`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：此小偷能偷到的最大金额，因为有防盗装置，不能连着偷，只能隔着偷。

解题思路：
- 动态规划解题，`dp[i]`就是当前和上一个取最大值，方程为：`dp[i] = max(dp[i - 1], nums[i] + dp[i - 2])`;
- 初始值：因为要计算`i - 2`，所以`dp[0] 和 dp[1]`都需要有初始值，按上述逻辑计算即可。

```javascript
function rob(nums) {
    let n = nums.length - 1, dp = new Array(n).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(dp[0], nums[1])
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
    }
    return dp[n]
}
```

[Back to list](../README.md)