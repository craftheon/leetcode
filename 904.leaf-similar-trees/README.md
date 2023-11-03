Leaf-Similar Trees
---
### Problem
Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a **leaf value sequence***.*


![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/16/tree.png)


For example, in the given tree above, the leaf value sequence is `(6, 7, 4, 9, 8)`.


Two binary trees are considered *leaf-similar* if their leaf value sequence is the same.


Return `true` if and only if the two given trees with head nodes `root1` and `root2` are leaf-similar.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-1.jpg)

```

**Input:** root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
**Output:** true

```

**Example 2:**


![](https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-2.jpg)

```

**Input:** root1 = [1,2,3], root2 = [1,3,2]
**Output:** false

```

 


**Constraints:**


* The number of nodes in each tree will be in the range `[1, 200]`.
* Both of the given trees will have values in the range `[0, 200]`.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：判断两颗二叉树的叶子节点形成的序列是否相同

解题思路：
- 前序遍历找到叶子节点即可

```javascript
var leafSimilar = function (root1, root2) {
    let seq1 = [], seq2 = []
    var reverse = function (tree, res) {
        if (!tree) return null
        if (tree.left == null && tree.right == null) {
            res.push(tree.val)
            return null
        }
        reverse(tree.left, res)
        reverse(tree.right, res)
    }
    reverse(root1, seq1)
    reverse(root2, seq2)
    if (seq1.length !== seq2.length) return false
    for (let i = 0; i < seq1.length; i++) {
        if (seq1[i] !== seq2[i]) return false
    }
    return true
};
```

[Back to list](../README.md)