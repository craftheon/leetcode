Add One Row to Tree
---
### Problem
Given the `root` of a binary tree and two integers `val` and `depth`, add a row of nodes with value `val` at the given depth `depth`.


Note that the `root` node is at depth `1`.


The adding rule is:


* Given the integer `depth`, for each not null tree node `cur` at the depth `depth - 1`, create two tree nodes with value `val` as `cur`'s left subtree root and right subtree root.
* `cur`'s original left subtree should be the left subtree of the new left subtree root.
* `cur`'s original right subtree should be the right subtree of the new right subtree root.
* If `depth == 1` that means there is no depth `depth - 1` at all, then create a tree node with value `val` as the new root of the whole original tree, and the original tree is the new root's left subtree.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2021/03/15/addrow-tree.jpg)

```

**Input:** root = [4,2,6,3,1,5], val = 1, depth = 2
**Output:** [4,1,1,2,null,null,6,3,1,5]

```

**Example 2:**


![](https://assets.leetcode.com/uploads/2021/03/11/add2-tree.jpg)

```

**Input:** root = [4,2,null,3,1], val = 1, depth = 3
**Output:** [4,2,null,1,1,3,null,null,1]

```

 


**Constraints:**


* The number of nodes in the tree is in the range `[1, 104]`.
* The depth of the tree is in the range `[1, 104]`.
* `-100 <= Node.val <= 100`
* `-105 <= val <= 105`
* `1 <= depth <= the depth of tree + 1`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：在指定的层数添加两个节点。

解题思路：
- 使用二叉树层次遍历框架，在`depth - 1`节点时做添加操作；
- `depth === 1`时无需操作，直接返回val为root的节点即可。

```javascript
var addOneRow = function (root, val, depth) {
    if (depth === 1) return new TreeNode(val, root);

    const refactor = (node = root, currentDep = 1) => {
        if (!node) return;
        if (currentDep === depth - 1) {
            const { left, right } = node;
            node.left = new TreeNode(val, left);
            node.right = new TreeNode(val, null, right);
        }
        refactor(node.left, currentDep + 1);
        refactor(node.right, currentDep + 1);
    };
    refactor();
    return root;
};
```

[Back to list](../README.md)