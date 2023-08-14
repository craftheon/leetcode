Minimum Absolute Difference in BST
---
### Problem
Given the `root` of a Binary Search Tree (BST), return *the minimum absolute difference between the values of any two different nodes in the tree*.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2021/02/05/bst1.jpg)

```

**Input:** root = [4,2,6,1,3]
**Output:** 1

```

**Example 2:**


![](https://assets.leetcode.com/uploads/2021/02/05/bst2.jpg)

```

**Input:** root = [1,0,48,null,null,12,49]
**Output:** 1

```

 


**Constraints:**


* The number of nodes in the tree is in the range `[2, 104]`.
* `0 <= Node.val <= 105`


 


**Note:** This question is the same as 783: <https://leetcode.com/problems/minimum-distance-between-bst-nodes/>


### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：在一个二叉搜索树中求两个节点的最小区间差

解题思路：
- 一个公式：二叉搜索树使用中序遍历可得到一个递增数组，
- 据此，这题就变为：求一个递增数组中两个节点的最小区间和，遍历一次即可得到

```javascript
var getMinimumDifference = function(root) {
    const arr = []
    const reverse = function(node) {
        if (node === null) return null
        reverse(node.left)
        arr.push(node.val)
        reverse(node.right)
    }
    reverse(root)
    let min = arr[1] - arr[0]
    for(let i = 2; i < arr.length; i ++) {
        min = Math.min(min, arr[i] - arr[i - 1]) // 最小和肯定存在于相邻节点间，因此直接遍历即可
    }
    return min
};
```

[Back to list](../README.md)