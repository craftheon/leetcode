Binary Tree Zigzag Level Order Traversal
---
### Problem
Given the `root` of a binary tree, return *the zigzag level order traversal of its nodes' values*. (i.e., from left to right, then right to left for the next level and alternate between).


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)

```

**Input:** root = [3,9,20,null,null,15,7]
**Output:** [[3],[20,9],[15,7]]

```

**Example 2:**



```

**Input:** root = [1]
**Output:** [[1]]

```

**Example 3:**



```

**Input:** root = []
**Output:** []

```

 


**Constraints:**


* The number of nodes in the tree is in the range `[0, 2000]`.
* `-100 <= Node.val <= 100`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：锯齿状输出二叉树层次遍历的结果

解题思路：
- 一个不算高级的思路：
  - 先层次遍历后，在将奇数位的结果反转。

```javascript
var zigzagLevelOrder = function(root) {
    let ans = []
    const reverse = function(node, h) {
        if (node === null) return null
        ans[h] = Array.isArray(ans[h]) ? ans[h].concat([node.val]) : [node.val]
        reverse(node.left, h + 1)
        reverse( node.right, h + 1)
    }
    reverse(root, 0)
    for(let i = 0; i < ans.length; i ++) {
        if (i % 2 !== 0) {
            ans[i] = ans[i].reverse()
        }
    }
    return ans
};
```

[Back to list](../README.md)