tree
---

2023.7.3
https://leetcode.com/tag/tree/

## 二叉树知识整理
前序遍历

中序遍历

后序遍历

层次遍历

搜索树

平衡树

前缀树




## 94. Binary Tree Inorder Traversal
题目大意：返回中序遍历的结果

**最佳题解**
``` javascript
var inorderTraversal = function(root) {
    const res = [];
    if (root == null) return res;
    res.push(...inorderTraversal(root.left));
    res.push(root.val);
    res.push(...inorderTraversal(root.right));
    return res;
};
```
思路：
本题参考了labuladong的递归中序遍历的解法，比较简单没什么花头。