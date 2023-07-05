Validate Binary Search Tree
---
### Problem
Given the `root` of a binary tree, *determine if it is a valid binary search tree (BST)*.


A **valid BST** is defined as follows:


* The left subtree of a node contains only nodes with keys **less than** the node's key.
* The right subtree of a node contains only nodes with keys **greater than** the node's key.
* Both the left and right subtrees must also be binary search trees.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg)

```

**Input:** root = [2,1,3]
**Output:** true

```

**Example 2:**


![](https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg)

```

**Input:** root = [5,1,4,null,null,3,6]
**Output:** false
**Explanation:** The root node's value is 5 but its right child's value is 4.

```

 


**Constraints:**


* The number of nodes in the tree is in the range `[1, 104]`.
* `-231 <= Node.val <= 231 - 1`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：判断二叉树是否为BST。

解题思路：
- 按定义判断即可。

```javascript
var isValidBST = function(root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};
```

[Back to list](../README.md)