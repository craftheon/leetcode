Maximal Square
---
### Problem
Given an `m x n` binary `matrix` filled with `0`'s and `1`'s, *find the largest square containing only* `1`'s *and return its area*.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2020/11/26/max1grid.jpg)

```

**Input:** matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
**Output:** 4

```

**Example 2:**


![](https://assets.leetcode.com/uploads/2020/11/26/max2grid.jpg)

```

**Input:** matrix = [["0","1"],["1","0"]]
**Output:** 1

```

**Example 3:**



```

**Input:** matrix = [["0"]]
**Output:** 0

```

 


**Constraints:**


* `m == matrix.length`
* `n == matrix[i].length`
* `1 <= m, n <= 300`
* `matrix[i][j]` is `'0'` or `'1'`.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：

解题思路：
- 

```javascript
var maximalSquare = function(matrix) {
    let m = matrix.length + 1,
        n = matrix[0].length + 1,
        dp = new Array(m).fill(null).map(() => new Array(n).fill(0)),
        max = -Infinity
    for(let i = 1; i < m; i ++) {
        for(let j = 1; j < n; j ++) {
            if (matrix[i - 1][j - 1] == "1") {
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1
                max = Math.max(dp[i][j], max)
            }
        }
    }
    return max === -Infinity ? 0 : max * max
};
```

[Back to list](../README.md)