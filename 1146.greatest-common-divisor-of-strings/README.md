Greatest Common Divisor of Strings
---
### Problem
For two strings `s` and `t`, we say "`t` divides `s`" if and only if `s = t + ... + t` (i.e., `t` is concatenated with itself one or more times).


Given two strings `str1` and `str2`, return *the largest string* `x` *such that* `x` *divides both* `str1` *and* `str2`.


 


**Example 1:**



```

**Input:** str1 = "ABCABC", str2 = "ABC"
**Output:** "ABC"

```

**Example 2:**



```

**Input:** str1 = "ABABAB", str2 = "ABAB"
**Output:** "AB"

```

**Example 3:**



```

**Input:** str1 = "LEET", str2 = "CODE"
**Output:** ""

```

 


**Constraints:**


* `1 <= str1.length, str2.length <= 1000`
* `str1` and `str2` consist of English uppercase letters.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：

解题思路：
- 

```javascript
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return ''
    let findSTR = function (a, b) {
        return b === 0 ? a : findSTR(b, a % b);
    }
    let result = findSTR (str1.length, str2.length);
    return str1.substring(0, result);
};
```

[Back to list](../README.md)