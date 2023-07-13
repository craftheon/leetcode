Two Sum IV - Input is a BST
---
### Problem
Given the `root` of a binary search tree and an integer `k`, return `true` *if there exist two elements in the BST such that their sum is equal to* `k`, *or* `false` *otherwise*.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2020/09/21/sum_tree_1.jpg)

```

**Input:** root = [5,3,6,2,4,null,7], k = 9
**Output:** true

```

**Example 2:**


![](https://assets.leetcode.com/uploads/2020/09/21/sum_tree_2.jpg)

```

**Input:** root = [5,3,6,2,4,null,7], k = 28
**Output:** false

```

 


**Constraints:**


* The number of nodes in the tree is in the range `[1, 104]`.
* `-104 <= Node.val <= 104`
* `root` is guaranteed to be a **valid** binary search tree.
* `-105 <= k <= 105`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：二叉树版两数相加

解题思路：
- 参考两数相加 [1.Two Sum](../1.two-sum/)

```javascript
var findTarget = function(root, k) {
    const m = {}
    const s = [root]
    while(s.length) {
        const c = s.pop()
        if (m[c.val] !== undefined) {
            return true
        }
        m[k - c.val] = c.val
        c.right && s.push(c.right)
        c.left && s.push(c.left)
    }
    console.log(Object.keys(m))
    return false
};
```

[Back to list](../README.md)