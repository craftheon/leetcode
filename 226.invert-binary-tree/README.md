Invert Binary Tree
---
### Problem
Given the `root` of a binary tree, invert the tree, and return *its root*.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg)

```

**Input:** root = [4,2,7,1,3,6,9]
**Output:** [4,7,2,9,6,3,1]

```

**Example 2:**


![](https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg)

```

**Input:** root = [2,1,3]
**Output:** [2,3,1]

```

**Example 3:**



```

**Input:** root = []
**Output:** []

```

 


**Constraints:**


* The number of nodes in the tree is in the range `[0, 100]`.
* `-100 <= Node.val <= 100`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：反转二叉树

解题思路：
- 在前序时交换左右子树

```javascript
var invertTree = function(root) {
    if (root === null) return null;
    [root.left, root.right] = [root.right, root.left]
    invertTree(root.left)
    invertTree(root.right)
    return root
};
```

[Back to list](../README.md)