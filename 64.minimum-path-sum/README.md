Minimum Path Sum
---
### Problem
Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.


**Note:** You can only move either down or right at any point in time.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg)

```

**Input:** grid = [[1,3,1],[1,5,1],[4,2,1]]
**Output:** 7
**Explanation:** Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

```

**Example 2:**



```

**Input:** grid = [[1,2,3],[4,5,6]]
**Output:** 12

```

 


**Constraints:**


* `m == grid.length`
* `n == grid[i].length`
* `1 <= m, n <= 200`
* `0 <= grid[i][j] <= 200`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：计算二维矩阵从左上角到右下角的最短路径和

解题思路：
- 这题和63题思路基本一致，动态规划解题，状态方程为：`dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j])`；
- 二维DP的一个要点：边界条件除了`dp[0][0]`外，还有`dp[i][0]`和`dp[0][j]`同样要处理，处理完后从`i = 1; j = 1`处遍历即可

```javascript
var minPathSum = function(grid) {
    let m = grid.length,
        n = grid[0].length,
        dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    dp[0][0] = grid[0][0]
    for(let i = 1; i < m; i ++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    }
    for(let j = 1; j < n; j ++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j]
    }
    for(let i = 1; i < m; i ++) {
        for(let j = 1; j < n; j ++) {
            dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j])
        }
    }
    return dp[m - 1][n - 1]
};
```

[Back to list](../README.md)