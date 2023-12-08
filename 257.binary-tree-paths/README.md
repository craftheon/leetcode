Binary Tree Paths
---
### Problem
Given the `root` of a binary tree, return *all root-to-leaf paths in **any order***.


A **leaf** is a node with no children.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2021/03/12/paths-tree.jpg)

```

**Input:** root = [1,2,3,null,5]
**Output:** ["1->2->5","1->3"]

```

**Example 2:**



```

**Input:** root = [1]
**Output:** ["1"]

```

 


**Constraints:**


* The number of nodes in the tree is in the range `[1, 100]`.
* `-100 <= Node.val <= 100`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：

解题思路：
- 

```javascript
var binaryTreePaths = function(root) {
    const res = []
    const dfs = function(node = root, path = "") {
        if (node === null) {
            return
        }
        path += node.val.toString();
        if (node.left === null && node.right === null) { 
            res.push(path); 
        } else {
            path += "->";
            dfs(node.left, path);
            dfs(node.right, path);
        }
    }
    dfs()
    return res
};
```

[Back to list](../README.md)