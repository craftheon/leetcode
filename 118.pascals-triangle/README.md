Pascal's Triangle
---
### Problem
Given an integer `numRows`, return the first numRows of **Pascal's triangle**.


In **Pascal's triangle**, each number is the sum of the two numbers directly above it as shown:


![](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)
 


**Example 1:**



```
**Input:** numRows = 5
**Output:** [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

```
**Example 2:**



```
**Input:** numRows = 1
**Output:** [[1]]

```

 


**Constraints:**


* `1 <= numRows <= 30`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：

解题思路：
- 

```javascript
var generate = function(numRows) {
    const p = []
    for(var i = 0; i < numRows; i ++) {
        p[i] = []
        p[i][0] = 1
        for(var j = 1; j < i; j ++) {
            p[i][j] = p[i - 1][j - 1] + p[i - 1][j]
        }
        p[i][i] = 1
    }
    return p
};
```

[Back to list](../README.md)