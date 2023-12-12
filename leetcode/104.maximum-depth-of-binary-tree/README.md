Maximum Depth of Binary Tree
---
### Problem
Given the `root` of a binary tree, return *its maximum depth*.


A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)

```

**Input:** root = [3,9,20,null,null,15,7]
**Output:** 3

```

**Example 2:**



```

**Input:** root = [1,null,2]
**Output:** 2

```

 


**Constraints:**


* The number of nodes in the tree is in the range `[0, 104]`.
* `-100 <= Node.val <= 100`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：输出二叉树的最大深度

解题思路：
- 任意顺序遍历二叉树，到叶子节点时计算深度，保留最大的一个

```javascript
// 解法1
var maxDepth = function(root) {
    let res = 0
    let depth = 0
    var tranvse = function(root) {
        if (root === null) {
            return;
        }
        depth ++
        res = Math.max(res, depth) 
        tranvse(root.left)
        tranvse(root.right)
        depth --
    }

    tranvse(root)
    return res
};

// 解法2
var maxDepth = function(root) {
    if (root === null) {
        return 0
    }
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return Math.max(left, right) + 1
};
```

[Back to list](../README.md)