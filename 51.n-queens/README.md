N-Queens
---
### Problem
The **n-queens** puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other.


Given an integer `n`, return *all distinct solutions to the **n-queens puzzle***. You may return the answer in **any order**.


Each solution contains a distinct board configuration of the n-queens' placement, where `'Q'` and `'.'` both indicate a queen and an empty space, respectively.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2020/11/13/queens.jpg)

```

**Input:** n = 4
**Output:** [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
**Explanation:** There exist two distinct solutions to the 4-queens puzzle as shown above

```

**Example 2:**



```

**Input:** n = 1
**Output:** [["Q"]]

```

 


**Constraints:**


* `1 <= n <= 9`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：n皇后问题，回溯算法经典题目

解题思路：
- https://www.hello-algo.com/chapter_backtracking/n_queens_problem/#2

```javascript
var solveNQueens = function (n) {
    let path = Array.from({ length: n }, () => Array(n).fill('.')),
        cols = [],
        diags1 = [],
        diags2 = [],
        ans = [];

    function backtrack(row) {
        if (row === n) {
            ans.push(path.map((row) => row.join('')));
            return;
        }
        for (let col = 0; col < n; col += 1) {
            if (cols[col] || diags1[row + col] || diags2[row - col]) {
                continue
            }
            path[row][col] = 'Q';
            cols[col] = diags1[row + col] = diags2[row - col] = true;
            backtrack(row + 1);
            path[row][col] = '.';
            cols[col] = diags1[row + col] = diags2[row - col] = false;
        }
    }
    backtrack(0);
    return ans;
};
```

[Back to list](../README.md)