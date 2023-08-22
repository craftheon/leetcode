Triangle
---
### Problem
Given a `triangle` array, return *the minimum path sum from top to bottom*.


For each step, you may move to an adjacent number of the row below. More formally, if you are on index `i` on the current row, you may move to either index `i` or index `i + 1` on the next row.


 


**Example 1:**



```

**Input:** triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
**Output:** 11
**Explanation:** The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).

```

**Example 2:**



```

**Input:** triangle = [[-10]]
**Output:** -10

```

 


**Constraints:**


* `1 <= triangle.length <= 200`
* `triangle[0].length == 1`
* `triangle[i].length == triangle[i - 1].length + 1`
* `-104 <= triangle[i][j] <= 104`


 


**Follow up:** Could you do this using only `O(n)` extra space, where `n` is the total number of rows in the triangle?
### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：计算三角形从上到下的最小路径和

解题思路：
- 从下到上遍历三角形，依次计算最小路径和，顶点即最小路径和。

```javascript
var minimumTotal = function (triangle) {
    for (let i = triangle.length - 1; i > 0; i--) {
        const row = triangle[i];
        for (let j = 0; j < row.length - 1; j++) {
            triangle[i - 1][j] += Math.min(row[j], row[j + 1]);
        }
    }
    return triangle[0];
};
```

[Back to list](../README.md)