Longest ZigZag Path in a Binary Tree
---
### Problem
You are given the `root` of a binary tree.


A ZigZag path for a binary tree is defined as follow:


* Choose **any** node in the binary tree and a direction (right or left).
* If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
* Change the direction from right to left or from left to right.
* Repeat the second and third steps until you can't move in the tree.


Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).


Return *the longest **ZigZag** path contained in that tree*.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2020/01/22/sample_1_1702.png)

```

**Input:** root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
**Output:** 3
**Explanation:** Longest ZigZag path in blue nodes (right -> left -> right).

```

**Example 2:**


![](https://assets.leetcode.com/uploads/2020/01/22/sample_2_1702.png)

```

**Input:** root = [1,1,1,null,1,null,null,1,1,null,1]
**Output:** 4
**Explanation:** Longest ZigZag path in blue nodes (left -> right -> left -> right).

```

**Example 3:**



```

**Input:** root = [1]
**Output:** 0

```

 


**Constraints:**


* The number of nodes in the tree is in the range `[1, 5 * 104]`.
* `1 <= Node.val <= 100`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：计算二叉树中左右变换节点路径的最大长度

解题思路：
- dfs前序解题，重点在变换二叉树的遍历方向

```javascript
var longestZigZag = function (root) {
    let ans = 0

    const reverse = function (node, flag, level) {
        if (!node) return null
        ans = Math.max(ans, level)
        if (flag === 0) {
            reverse(node.right, 1, level + 1)
            reverse(node.left, 0, 1)
        } else {
            reverse(node.left, 0, level + 1)
            reverse(node.right, 1, 1)
        }

    }

    reverse(root.right, 1, 1)
    reverse(root.left, 0, 1)
    return ans
};
```

[Back to list](../README.md)