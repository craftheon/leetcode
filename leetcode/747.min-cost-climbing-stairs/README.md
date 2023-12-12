Min Cost Climbing Stairs
---
### Problem
You are given an integer array `cost` where `cost[i]` is the cost of `ith` step on a staircase. Once you pay the cost, you can either climb one or two steps.


You can either start from the step with index `0`, or the step with index `1`.


Return *the minimum cost to reach the top of the floor*.


 


**Example 1:**



```

**Input:** cost = [10,15,20]
**Output:** 15
**Explanation:** You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.

```

**Example 2:**



```

**Input:** cost = [1,100,1,1,1,100,1,1,100,1]
**Output:** 6
**Explanation:** You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.

```

 


**Constraints:**


* `2 <= cost.length <= 1000`
* `0 <= cost[i] <= 999`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：爬楼梯的最小花费

解题思路：
- 注意最后要比较一下当前和上一级的花费哪个小，因为支付一次最多可以跳两个台阶

```javascript
var minCostClimbingStairs = function(cost) {
    let n = cost.length - 1,
        dp = new Array(n + 1).fill(0)

    dp[0] = cost[0]
    dp[1] = cost[1]

    for(let i = 2; i <= n; i ++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2])  + cost[i]
    }
    return Math.min(dp[n], dp[n - 1])
};
```

[Back to list](../README.md)