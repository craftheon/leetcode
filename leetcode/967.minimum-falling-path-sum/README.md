Minimum Falling Path Sum
---
### Problem
Given an `n x n` array of integers `matrix`, return *the **minimum sum** of any **falling path** through* `matrix`.


A **falling path** starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position `(row, col)` will be `(row + 1, col - 1)`, `(row + 1, col)`, or `(row + 1, col + 1)`.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2021/11/03/failing1-grid.jpg)

```

**Input:** matrix = [[2,1,3],[6,5,4],[7,8,9]]
**Output:** 13
**Explanation:** There are two falling paths with a minimum sum as shown.

```

**Example 2:**


![](https://assets.leetcode.com/uploads/2021/11/03/failing2-grid.jpg)

```

**Input:** matrix = [[-19,57],[-40,-5]]
**Output:** -59
**Explanation:** The falling path with a minimum sum is shown.

```

 


**Constraints:**


* `n == matrix.length == matrix[i].length`
* `1 <= n <= 100`
* `-100 <= matrix[i][j] <= 100`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：矩阵中下降路径和的最小值

解题思路：
- 仍然dp思路，需要注意边界问题

```javascript
var minFallingPathSum = function(matrix) {
    let m = matrix.length - 1,
        n = matrix[0].length - 1
        dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
        ans = Number.MAX_VALUE

    dp[0][0] = matrix[0][0]
   
    for(let i = 1; i <= n; i ++) {
        dp[0][i] = matrix[0][i]
    }
    
    for(let i = 1; i <= m; i ++) {
        for(let j = 0; j <= n; j ++) {
            const lr = dp[i - 1]
            let min
            if (j === 0) {
                min = Math.min(lr[j], lr[j + 1])
            } else if (j === n) {
                min = Math.min(lr[j], lr[j - 1])
            } else {
                min = Math.min(lr[j], lr[j - 1], lr[j + 1])
            }
            dp[i][j] = min + matrix[i][j]
        }
    }
 
    return dp[m].sort((a, b) => a - b)[0]
};
```

[Back to list](../README.md)