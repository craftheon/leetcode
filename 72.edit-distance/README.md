Edit Distance
---
### Problem
Given two strings `word1` and `word2`, return *the minimum number of operations required to convert `word1` to `word2`*.


You have the following three operations permitted on a word:


* Insert a character
* Delete a character
* Replace a character


 


**Example 1:**



```

**Input:** word1 = "horse", word2 = "ros"
**Output:** 3
**Explanation:** 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

```

**Example 2:**



```

**Input:** word1 = "intention", word2 = "execution"
**Output:** 5
**Explanation:** 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')

```

 


**Constraints:**


* `0 <= word1.length, word2.length <= 500`
* `word1` and `word2` consist of lowercase English letters.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：计算最短编辑距离

解题思路：
- 二维DP解题，`dp[i][j] = min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (word1[i - 1] !== word2[j - 1] ? 1 : 0))`,
- 处理上侧和左侧的边界条件

```javascript
var minDistance = function (word1, word2) {
    let m = word1.length + 1,
        n = word2.length + 1,
        dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        dp[i][0] = i
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = j
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,
                dp[i][j - 1] + 1,
                dp[i - 1][j - 1] + (word1[i - 1] !== word2[j - 1] ? 1 : 0)
            )
        }
    }
    return dp[m - 1][n - 1]
};
```

[Back to list](../README.md)