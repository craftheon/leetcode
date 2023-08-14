Construct Binary Tree from Inorder and Postorder Traversal
---
### Problem
Given two integer arrays `inorder` and `postorder` where `inorder` is the inorder traversal of a binary tree and `postorder` is the postorder traversal of the same tree, construct and return *the binary tree*.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)

```

**Input:** inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
**Output:** [3,9,20,null,null,15,7]

```

**Example 2:**



```

**Input:** inorder = [-1], postorder = [-1]
**Output:** [-1]

```

 


**Constraints:**


* `1 <= inorder.length <= 3000`
* `postorder.length == inorder.length`
* `-3000 <= inorder[i], postorder[i] <= 3000`
* `inorder` and `postorder` consist of **unique** values.
* Each value of `postorder` also appears in `inorder`.
* `inorder` is **guaranteed** to be the inorder traversal of the tree.
* `postorder` is **guaranteed** to be the postorder traversal of the tree.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：从中序和后续遍历二叉树

解题思路：
- 

```javascript
var buildTree = function(inorder, postorder) {
    function build(arr) {
        if(!arr.length) return null;
        const val = postorder.pop();
        const idx = arr.indexOf(val);
        const node = new TreeNode(val);
        node.right = build(arr.slice(idx+1));
        node.left = build(arr.slice(0, idx));
        return node;
    }
    return build(inorder);
};
```

[Back to list](../README.md)