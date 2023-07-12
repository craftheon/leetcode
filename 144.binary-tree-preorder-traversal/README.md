Binary Tree Preorder Traversal
---
### Problem
Given the `root` of a binary tree, return *the preorder traversal of its nodes' values*.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg)

```

**Input:** root = [1,null,2,3]
**Output:** [1,2,3]

```

**Example 2:**



```

**Input:** root = []
**Output:** []

```

**Example 3:**



```

**Input:** root = [1]
**Output:** [1]

```

 


**Constraints:**


* The number of nodes in the tree is in the range `[0, 100]`.
* `-100 <= Node.val <= 100`


 


**Follow up:** Recursive solution is trivial, could you do it iteratively?


### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：输出二叉树前序遍历结果

解题思路：
- 略

```javascript
var preorderTraversal = function(root) {
    if (root === null) return []
    var left = preorderTraversal(root.left)
    var right = preorderTraversal(root.right)
    return [root.val].concat(left, right)
};
```

[Back to list](../README.md)