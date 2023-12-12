Trapping Rain Water
---
### Problem
Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png)

```

**Input:** height = [0,1,0,2,1,0,1,3,2,1,2,1]
**Output:** 6
**Explanation:** The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

```

**Example 2:**



```

**Input:** height = [4,2,0,3,2,5]
**Output:** 9

```

 


**Constraints:**


* `n == height.length`
* `1 <= n <= 2 * 104`
* `0 <= height[i] <= 105`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：接雨水

解题思路：
- 

```javascript
var trap = function(height) {
    let res = 0, left = 0, right = height.length - 1, maxLeft = 0, maxRight = 0;

    while(left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] > maxLeft) {
                maxLeft = height[left]
            } else {
                res += maxLeft - height[left]
            }
            left += 1
        } else {
            if (height[right] >= maxRight) {
                maxRight = height[right]
            } else {
                res += maxRight - height[right]
            }
            right -= 1
        }
    }
    return res
};
```

[Back to list](../README.md)