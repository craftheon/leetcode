Container With Most Water
---
### Problem
You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.


Find two lines that together with the x-axis form a container, such that the container contains the most water.


Return *the maximum amount of water a container can store*.


**Notice** that you may not slant the container.


 


**Example 1:**


![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg)

```

**Input:** height = [1,8,6,2,5,4,8,3,7]
**Output:** 49
**Explanation:** The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

```

**Example 2:**



```

**Input:** height = [1,1]
**Output:** 1

```

 


**Constraints:**


* `n == height.length`
* `2 <= n <= 105`
* `0 <= height[i] <= 104`

### Code
[✅ Javascript](./solution.js)
### Solution
- 对向双指针，一次循环中：左边小 左指针右移，右边小 右指针左移，同时高度为最短的，宽度为右指针到左指针的距离。 
- 所有结果中保留最大的

``` javascript
var maxArea = function(height) {
    var l = 0, r = height.length - 1
    var res = 0
    while (l < r) {
        var h = 0, w = r - l
        if (height[l] < height[r]) {
            h = height[l]
            l ++
        } else {
            h = height[r]
            r --
        }
        t = h * w
        res = Math.max(t, res)
    }
    return res
};
```