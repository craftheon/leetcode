Coin Change
---
### Problem
You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.


Return *the fewest number of coins that you need to make up that amount*. If that amount of money cannot be made up by any combination of the coins, return `-1`.


You may assume that you have an infinite number of each kind of coin.


 


**Example 1:**



```

**Input:** coins = [1,2,5], amount = 11
**Output:** 3
**Explanation:** 11 = 5 + 5 + 1

```

**Example 2:**



```

**Input:** coins = [2], amount = 3
**Output:** -1

```

**Example 3:**



```

**Input:** coins = [1], amount = 0
**Output:** 0

```

 


**Constraints:**


* `1 <= coins.length <= 12`
* `1 <= coins[i] <= 231 - 1`
* `0 <= amount <= 104`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：凑零钱，用最少的金币组合凑出目标值

解题思路：
- 动态规划解题：`dp[amount] = min(dp[amount], dp[amount - coin] + 1), dp[0] = 0`；
- amount - coin 需要大于0；

```javascript
var coinChange = function (coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for (coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};
```

[Back to list](../README.md)