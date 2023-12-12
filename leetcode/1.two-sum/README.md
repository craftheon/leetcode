Two Sum
---
### Problem
Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.


You may assume that each input would have ***exactly* one solution**, and you may not use the *same* element twice.


You can return the answer in any order.


 


**Example 1:**



```

**Input:** nums = [2,7,11,15], target = 9
**Output:** [0,1]
**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1].

```

**Example 2:**



```

**Input:** nums = [3,2,4], target = 6
**Output:** [1,2]

```

**Example 3:**



```

**Input:** nums = [3,3], target = 6
**Output:** [0,1]

```

 


**Constraints:**


* `2 <= nums.length <= 104`
* `-109 <= nums[i] <= 109`
* `-109 <= target <= 109`
* **Only one valid answer exists.**


 


**Follow-up:**Can you come up with an algorithm that is less than `O(n2)`time complexity?
### Code
[✅ Javascript](./solution.js) 
[✅ Go](./solution.go)
[✅ Python](./solution.py)

### Solution 
题目含义：

解题思路：
- 用map存储target - num的结果，如果之前没有出现过，就先缓存起来；
- 后面的遍历过程中target - num的结果只要出现在map中，则说明条件符合，返回结果即可。

```javascript
function twoSum(nums, target) {
    const map = {}
    for (const [index, num] of nums.entries()) {
        if (map[target - num] !== undefined) {
            return [map[target - num], index]
        }
        map[num] = index
    }
    return []
}
```
[Back to list](../README.md)