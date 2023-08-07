Jump Game
---
### Problem
You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.


Return `true` *if you can reach the last index, or* `false` *otherwise*.


 


**Example 1:**



```

**Input:** nums = [2,3,1,1,4]
**Output:** true
**Explanation:** Jump 1 step from index 0 to 1, then 3 steps to the last index.

```

**Example 2:**



```

**Input:** nums = [3,2,1,0,4]
**Output:** false
**Explanation:** You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

```

 


**Constraints:**


* `1 <= nums.length <= 104`
* `0 <= nums[i] <= 105`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：从0索引开始，依次最大可以跳nums[i]步，是否能跳到最后一步

解题思路：
- 遍历数组，记录当前步骤后最大可跳的步数
- 如果索引已经在最大可跳步数外，说明肯定没法到达最后一步

```javascript
var canJump = function(nums) {
    let n = nums.length
    if (n === 0) return false
    if (n === 1) return true
    let maxJump = 0
    for(i = 0; i < nums.length; i ++) {
        if (i > maxJump) {
            return false
        }
        maxJump = Math.max(maxJump, i + nums[i])
    }
    return true
};
```

[Back to list](../README.md)