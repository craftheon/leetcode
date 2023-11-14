Permutations
---
### Problem
Given an array `nums` of distinct integers, return *all the possible permutations*. You can return the answer in **any order**.


 


**Example 1:**



```
**Input:** nums = [1,2,3]
**Output:** [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

```
**Example 2:**



```
**Input:** nums = [0,1]
**Output:** [[0,1],[1,0]]

```
**Example 3:**



```
**Input:** nums = [1]
**Output:** [[1]]

```

 


**Constraints:**


* `1 <= nums.length <= 6`
* `-10 <= nums[i] <= 10`
* All the integers of `nums` are **unique**.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：输出nums的全排列

解题思路：
- 经典回溯算法题目，递归前选择当前路径，递归取消当前路径

```javascript
var permute = function (nums) {
    const ans = [];
    const backtrack = (path) => {
      if (path.length === nums.length) {
        ans.push([...path])
      }

      for (const n of nums) {
        if (path.includes(n)) {
            continue
        }
        path.push(n);
        backtrack(path);
        path.pop();
      };
    };
    backtrack([]);
    return ans;
};
```

[Back to list](../README.md)