Kth Smallest Element in a BST
---
### Problem
Given the `root` of a binary search tree, and an integer `k`, return *the* `kth` *smallest value (**1-indexed**) of all the values of the nodes in the tree*.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2021/01/28/kthtree1.jpg)

```

**Input:** root = [3,1,4,null,2], k = 1
**Output:** 1

```

**Example 2:**


![](https://assets.leetcode.com/uploads/2021/01/28/kthtree2.jpg)

```

**Input:** root = [5,3,6,2,4,null,null,1], k = 3
**Output:** 3

```

 


**Constraints:**


* The number of nodes in the tree is `n`.
* `1 <= k <= n <= 104`
* `0 <= Node.val <= 104`


 


**Follow up:** If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?


### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：二叉搜索树中第K小个元素

解题思路：
- 二叉搜索树中序遍历即可得到递增数组。

```javascript
var kthSmallest = function (root, k) {
    const arr = []
    const reverse = function (node) {
        if (node === null) return null
        reverse(node.left)
        arr.push(node.val)
        reverse(node.right)
    }
    reverse(root)
    return arr[k - 1]
};
```

[Back to list](../README.md)