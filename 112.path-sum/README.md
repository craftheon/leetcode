Path Sum
---
### Problem
Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a **root-to-leaf** path such that adding up all the values along the path equals `targetSum`.


A **leaf** is a node with no children.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg)

```

**Input:** root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
**Output:** true
**Explanation:** The root-to-leaf path with the target sum is shown.

```

**Example 2:**


![](https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg)

```

**Input:** root = [1,2,3], targetSum = 5
**Output:** false
**Explanation:** There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.

```

**Example 3:**



```

**Input:** root = [], targetSum = 0
**Output:** false
**Explanation:** Since the tree is empty, there are no root-to-leaf paths.

```

 


**Constraints:**


* The number of nodes in the tree is in the range `[0, 5000]`.
* `-1000 <= Node.val <= 1000`
* `-1000 <= targetSum <= 1000`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：

解题思路：
- 

```javascript
var hasPathSum = function(root, targetSum) {
    let res = false
    var reverse = function(node, val) {
        if (node?.val || node?.val === 0) {
            node.val += val
        }
        if (!node?.left && !node?.right && node?.val === targetSum) {
            res = true
        }
        if (node?.left) {
            reverse(node.left, node.val)
        }
        if (node?.right) {
            reverse(node.right, node.val)
        }
    }
    reverse(root, 0)
    return res
};
```

[Back to list](../README.md)