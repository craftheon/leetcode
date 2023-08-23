Longest Palindromic Substring
---
### Problem
Given a string `s`, return *the longest* *palindromic* *substring* in `s`.


 


**Example 1:**



```

**Input:** s = "babad"
**Output:** "bab"
**Explanation:** "aba" is also a valid answer.

```

**Example 2:**



```

**Input:** s = "cbbd"
**Output:** "bb"

```

 


**Constraints:**


* `1 <= s.length <= 1000`
* `s` consist of only digits and English letters.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：最长回文子串

解题思路：
- 这题解法很多，比较经典的还是用动态规划，但动态规划比较难理解，其实简单解法多的是，例如下面这样：
  - 两个for循环，直接从前后分别添加字符串，只要每一位都一样，则就是回文的。
  - 为了性能，可以把长度计算保存一下。

```javascript
var longestPalindrome = function(s) {
    let res = ''
    for(let i = 0; i < s.length; i ++) {
        let l = '', r = ''
        for(let j = i; j <= s.length; j ++) {
            l += s[j]
            r = s[j] + r
            if (l === r && res.length < l.length) {
                res = l
            }
        }
    }
    return res
};
```

[Back to list](../README.md)