Binary Tree Level Order Traversal II
---
### Problem
Given the `root` of a binary tree, return *the bottom-up level order traversal of its nodes' values*. (i.e., from left to right, level by level from leaf to root).


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)

```

**Input:** root = [3,9,20,null,null,15,7]
**Output:** [[15,7],[9,20],[3]]

```

**Example 2:**



```

**Input:** root = [1]
**Output:** [[1]]

```

**Example 3:**



```

**Input:** root = []
**Output:** []

```

 


**Constraints:**


* The number of nodes in the tree is in the range `[0, 2000]`.
* `-1000 <= Node.val <= 1000`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：二叉树层序遍历，倒序输出

解题思路：
- 按题意即可

```javascript
var levelOrderBottom = function(root) {
    if (!root) return [];
    let ans = [], queue = [root];
    
    while (queue.length) {
        let l = [], len = queue.length;
        
        for (let i = 0; i < len; i++) {
            const c = queue.shift();
            if (c.left) queue.push(c.left);
            if (c.right) queue.push(c.right);
            l.push(c.val)
        }
        ans.push(l);
    }
    
    return ans.reverse();
};

```

[Back to list](../README.md)