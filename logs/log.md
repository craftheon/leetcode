Programs log
---

two-pointers
23.6.15
https://leetcode.com/tag/two-pointers/

## 11. Container With Most Water

**最初思路：**
``` javascript
var maxArea = function(height) {
    var left = 0, right = left + 1
    var result = 0
    while(height.length > right) {
        if (height[left] < height[right]) {
            left = right
            right = right + 1
        } else {
            r = height[right] * (right - left)
            result = Math.max(r, result)
            right ++
        }
    }
    return result
};
```
思路：
顺向双指针，左边始终大于右边，计算右边到左边的长度*高度，保留面积最大的。

结果：
只能AC example，如果input是[1,2,1]，则不能AC。

**看完题解后思路：**
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
思路：
对撞双指针，一次循环中：左边小 左指针右移，右边小 右指针左移，同时高度为最短的，宽度为右指针 - 左指针。 所有结果中保留最大的

结果：
AC, O(log n)


---

---