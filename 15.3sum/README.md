3Sum
---
### Problem
Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.


Notice that the solution set must not contain duplicate triplets.


 


**Example 1:**



```

**Input:** nums = [-1,0,1,2,-1,-4]
**Output:** [[-1,-1,2],[-1,0,1]]
**Explanation:** 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

```

**Example 2:**



```

**Input:** nums = [0,1,1]
**Output:** []
**Explanation:** The only possible triplet does not sum up to 0.

```

**Example 3:**



```

**Input:** nums = [0,0,0]
**Output:** [[0,0,0]]
**Explanation:** The only possible triplet sums up to 0.

```

 


**Constraints:**


* `3 <= nums.length <= 3000`
* `-105 <= nums[i] <= 105`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：三数之和等于0，且不能重复。

- 用对向双指针解题，首先要做排序，因为指针移动的条件依赖元素的加和：加和大于0 右指针左移动，小于0左指针右移。
- 几个关键点：
    - 因为已经排过序了，所以如果nums[i] 已经大于0了，后面就不可能有符合条件的结果了，直接返回；
    - 去重：题目中要求不能有重复的三元组，所以三个元素都要进行去重判断：
        - nums[i] 去重条件：`i > 0 && nums[i] == nums[i - 1]`，如果当前元素和之前一个一样，肯定重复了，因为之前一个已经被遍历过了。不能判断`nums[i] == nums[i + 1]` 要判断前一个，不能判断后一个，因为**不能有重复的三元组，但三元组内的元素是可以重复的**
        - l和r的去重，应该在符合条件的时候进行；
        - nums[r] 去重条件：`r > l && nums[r] == nums[r - 1]` ，如果后一个和前一个一样，三元组肯定有重复，所以要跳过。
        - nums[l] 去重条件：`r > l && nums[l] == nums[l + 1]`，和上面的同理

```javascript
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const res = []
    for(let i = 0; i < nums.length; i ++) {
        let l = i + 1, r = nums.length - 1
        if (nums[i] > 0) {
            return res;
        }
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum > 0) {
                r --
            } else if (sum < 0) {
                l ++
            } else {
                res.push([nums[i], nums[l], nums[r]])
                while (r > l && nums[r] == nums[r - 1]) r--;
                while (r > l && nums[l] == nums[l + 1]) l++;
                r --;
                l ++;
            }
        }
    }
    return res
};
```

[Back to list](../README.md)