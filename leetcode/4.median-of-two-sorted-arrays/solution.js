const assert = require('node:assert/strict')

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

(function () {
    // test code here
    console.log('Accepted!')
})()
