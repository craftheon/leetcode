Palindrome Number
---
### Problem
Given an integer `x`, return `true` *if* `x` *is a* ***palindrome****, and* `false` *otherwise*.


 


**Example 1:**



```

**Input:** x = 121
**Output:** true
**Explanation:** 121 reads as 121 from left to right and from right to left.

```

**Example 2:**



```

**Input:** x = -121
**Output:** false
**Explanation:** From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

```

**Example 3:**



```

**Input:** x = 10
**Output:** false
**Explanation:** Reads 01 from right to left. Therefore it is not a palindrome.

```

 


**Constraints:**


* `-231 <= x <= 231 - 1`


 


**Follow up:** Could you solve it without converting the integer to a string?
### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：判断数字是否是回文数

解题思路：
- 最简单的双指针应用

```javascript
var isPalindrome = function(x) {
    x = x.toString()
    let l = 0, r = x.length - 1
    while(l <= r) {
        if (x[l] !== x[r]) return false
        l ++
        r --
    }
    return true
};
```

[Back to list](../README.md)