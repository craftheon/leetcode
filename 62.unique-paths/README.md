Unique Paths
---
### Problem
There is a robot on an `m x n` grid. The robot is initially located at the **top-left corner** (i.e., `grid[0][0]`). The robot tries to move to the **bottom-right corner** (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.


Given the two integers `m` and `n`, return *the number of possible unique paths that the robot can take to reach the bottom-right corner*.


The test cases are generated so that the answer will be less than or equal to `2 * 109`.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)

```

**Input:** m = 3, n = 7
**Output:** 28

```

**Example 2:**



```

**Input:** m = 3, n = 2
**Output:** 3
**Explanation:** From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

```

 


**Constraints:**


* `1 <= m, n <= 100`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：有多少条路径让机器人从左下角移动到右下角

解题思路：
- 本题是一道经典的二维DP题目；
- 二维DP解题步骤：
  - 构建DP数组
  - 设置边界值
  - 计算状态转移过程
- 本题边界值是`dp[1][0] = 1` 或者 `dp[0][1] = 1`, 这两个任选一个设置，因为机器人同一时间只能向下或者向右移动，所以这两个条件是一样的。 


```javascript
var uniquePaths = function (m, n) {
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    dp[1][0] = 1
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m][n]
};
```

[Back to list](../README.md)