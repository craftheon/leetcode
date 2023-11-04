const assert = require('node:assert/strict')

var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [...nums1, ...nums2].sort((a, b) => a - b)
    l = 0,
        r = arr.length - 1
    while (l < r) {
        l++
        r--
    }
    if (l === r) return arr[l]
    return (arr[l] + arr[r]) / 2
};

(function () {
    // test code here
    console.log('Accepted!')
})()
