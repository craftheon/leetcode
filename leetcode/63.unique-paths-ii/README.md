Unique Paths II
---
### Problem
You are given an `m x n` integer array `grid`. There is a robot initially located at the **top-left corner** (i.e., `grid[0][0]`). The robot tries to move to the **bottom-right corner** (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.


An obstacle and space are marked as `1` or `0` respectively in `grid`. A path that the robot takes cannot include **any** square that is an obstacle.


Return *the number of possible unique paths that the robot can take to reach the bottom-right corner*.


The testcases are generated so that the answer will be less than or equal to `2 * 109`.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2020/11/04/robot1.jpg)

```

**Input:** obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
**Output:** 2
**Explanation:** There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right

```

**Example 2:**


![](https://assets.leetcode.com/uploads/2020/11/04/robot2.jpg)

```

**Input:** obstacleGrid = [[0,1],[0,0]]
**Output:** 1

```

 


**Constraints:**


* `m == obstacleGrid.length`
* `n == obstacleGrid[i].length`
* `1 <= m, n <= 100`
* `obstacleGrid[i][j]` is `0` or `1`.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：计算可达终点的路径总数。

解题思路：
- 此题仍然用动态规划解题，时间复杂度是O(m x n);
- 根据题意比较好得出`dp[i][j] = dp[i - 1][j] + dp[i][j - 1]`;
- 此题难点在处理边界条件：
  - 首先`obstacleGrid[0][0] === 1`代表左上角有障碍物，没任何路径可走下去；
  - 之后依次处理上侧和右侧的边界，`obstacleGrid[i][0] === 0`代表当前路径无障碍，`dp[i - 1][0] === 1`代表来路是通的，如果都成立，则此路可通。
- 之后按状态方程依次计算通路。

```javascript
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] === 1) {
        return 0
    }
    let m = obstacleGrid.length,
        n = obstacleGrid[0].length,
        dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    dp[0][0] = 1
    for (let i = 1; i < m; i++) {
        dp[i][0] = (obstacleGrid[i][0] === 0 && dp[i - 1][0] === 1) ? 1 : 0
    }
    for (let j = 1; j < n; j++) {
        dp[0][j] = (obstacleGrid[0][j] === 0 && dp[0][j - 1] === 1) ? 1 : 0
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
        }
    }
    return dp[m - 1][n - 1]
};
```

[Back to list](../README.md)