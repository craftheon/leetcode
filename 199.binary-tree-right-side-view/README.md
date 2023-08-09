Binary Tree Right Side View
---
### Problem
Given the `root` of a binary tree, imagine yourself standing on the **right side** of it, return *the values of the nodes you can see ordered from top to bottom*.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2021/02/14/tree.jpg)

```

**Input:** root = [1,2,3,null,5,null,4]
**Output:** [1,3,4]

```

**Example 2:**



```

**Input:** root = [1,null,3]
**Output:** [1,3]

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
题目含义：输出二叉树最右侧的几个值

解题思路：
- 此题就是求二叉树层次遍历中每层最右边的值，使用二叉树层次遍历的框架即可：

```javascript
// 层次遍历框架
var levelReverse = function(root) {
    if (!root) return []
    let res = []
    const reverse = function(node, h) {
        if (!node) return null
        res[h] = Array.isArray(res[h]) ? res[h].concat([node.val]) :  [node.val]
        reverse(node.left, h + 1)
        reverse(node.right, h + 1)
    }
    reverse(root, 0)
    return res
};



// 题解
var rightSideView = function(root) {
    if (!root) return []
    let res = []
    const reverse = function(node, h) {
        if (!node) return null
        res[h] = node.val
        reverse(node.left, h + 1)
        reverse(node.right, h + 1)
    }
    reverse(root, 0)
    return res
};
```

[Back to list](../README.md)