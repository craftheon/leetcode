Median of Two Sorted Arrays
---
### Problem
Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.


The overall run time complexity should be `O(log (m+n))`.


 


**Example 1:**



```

**Input:** nums1 = [1,3], nums2 = [2]
**Output:** 2.00000
**Explanation:** merged array = [1,2,3] and median is 2.

```

**Example 2:**



```

**Input:** nums1 = [1,2], nums2 = [3,4]
**Output:** 2.50000
**Explanation:** merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

```

 


**Constraints:**


* `nums1.length == m`
* `nums2.length == n`
* `0 <= m <= 1000`
* `0 <= n <= 1000`
* `1 <= m + n <= 2000`
* `-106 <= nums1[i], nums2[i] <= 106`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：合并两个有序数组，返回其中位数

解题思路：
- 

```javascript
var findMedianSortedArrays = function (nums1, nums2) {
    const arr = []
    let l1 = 0, l2 = 0
    while (l1 < nums1.length && l2 < nums2.length) {
        if (nums1[l1] < nums2[l2]) {
            arr.push(nums1[l1])
            l1++
        } else {
            arr.push(nums2[l2])
            l2++
        }
    }
    while (l1 < nums1.length) {
        arr.push(nums1[l1])
        l1++
    }
    while (l2 < nums2.length) {
        arr.push(nums2[l2])
        l2++
    }
    let l = 0, r = arr.length - 1
    while (l < r) {
        l++
        r--
    }
    return (arr[l] + arr[r]) / 2
};
```

[Back to list](../README.md)