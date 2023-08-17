Is Subsequence
---
### Problem
Given two strings `s` and `t`, return `true` *if* `s` *is a **subsequence** of* `t`*, or* `false` *otherwise*.


A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).


 


**Example 1:**



```
**Input:** s = "abc", t = "ahbgdc"
**Output:** true

```
**Example 2:**



```
**Input:** s = "axc", t = "ahbgdc"
**Output:** false

```

 


**Constraints:**


* `0 <= s.length <= 100`
* `0 <= t.length <= 104`
* `s` and `t` consist only of lowercase English letters.


 


**Follow up:** Suppose there are lots of incoming `s`, say `s1, s2, ..., sk` where `k >= 109`, and you want to check one by one to see if `t` has its subsequence. In this scenario, how would you change your code?
### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：回文子序列

解题思路：
- 略

```javascript
var isSubsequence = function (s, t) {
    let idx = 0
    for (let i = 0; i < t.length; i++) {
        if (s[idx] === t[i]) {
            idx++
        }
    }
    return idx === s.length
};
```

[Back to list](../README.md)