Path Sum III
---
### Problem
Given the `root` of a binary tree and an integer `targetSum`, return *the number of paths where the sum of the values along the path equals* `targetSum`.


The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg)

```

**Input:** root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
**Output:** 3
**Explanation:** The paths that sum to 8 are shown.

```

**Example 2:**



```

**Input:** root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
**Output:** 3

```

 


**Constraints:**


* The number of nodes in the tree is in the range `[0, 1000]`.
* `-109 <= Node.val <= 109`
* `-1000 <= targetSum <= 1000`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：二叉树从上到下节点的三数之和

解题思路：
- 在每一个节点上做一次前序的DFS

```javascript
var pathSum = function (root, targetSum) {
    let ans = 0
    function count(tree, sum) {
        if (!tree) return
        sum += tree.val
        if (sum === targetSum) {
            ans++
        }
        count(tree.left, sum)
        count(tree.right, sum)
    }
    (function dfs(tree) {
        if (!tree) return
        count(tree, 0)
        dfs(tree.left)
        dfs(tree.right)
    })(root)
    return ans
};
```

[Back to list](../README.md)