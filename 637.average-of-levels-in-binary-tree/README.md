Average of Levels in Binary Tree
---
### Problem
Given the `root` of a binary tree, return *the average value of the nodes on each level in the form of an array*. Answers within `10-5` of the actual answer will be accepted.
 


**Example 1:**


![](https://assets.leetcode.com/uploads/2021/03/09/avg1-tree.jpg)

```

**Input:** root = [3,9,20,null,null,15,7]
**Output:** [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].

```

**Example 2:**


![](https://assets.leetcode.com/uploads/2021/03/09/avg2-tree.jpg)

```

**Input:** root = [3,9,20,15,7]
**Output:** [3.00000,14.50000,11.00000]

```

 


**Constraints:**


* The number of nodes in the tree is in the range `[1, 104]`.
* `-231 <= Node.val <= 231 - 1`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：求每层的平均数

解题思路：
- 先层次遍历，后依次求平均数

```javascript
var averageOfLevels = function(root) {
    let levels = [], ans = []
    const reverse = function(node, h) {
        if (node === null) return null
        levels[h] = Array.isArray(levels[h]) ? levels[h].concat([node.val]) : [node.val]
        reverse(node.left, h + 1)
        reverse(node.right, h + 1)
    }
    reverse(root, 0)
    for(let i = 0; i < levels.length; i ++) {
        const cur = levels[i]
        ans.push(cur.reduce((p, c) => p + c) / cur.length)
    }
    return ans
};
```

[Back to list](../README.md)