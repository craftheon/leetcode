Valid Palindrome
---
### Problem
A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.


Given a string `s`, return `true` *if it is a **palindrome**, or* `false` *otherwise*.


 


**Example 1:**



```

**Input:** s = "A man, a plan, a canal: Panama"
**Output:** true
**Explanation:** "amanaplanacanalpanama" is a palindrome.

```

**Example 2:**



```

**Input:** s = "race a car"
**Output:** false
**Explanation:** "raceacar" is not a palindrome.

```

**Example 3:**



```

**Input:** s = " "
**Output:** true
**Explanation:** s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

```

 


**Constraints:**


* `1 <= s.length <= 2 * 105`
* `s` consists only of printable ASCII characters.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：判断字符串是回文字符串，要求去掉所有特殊字符

解题思路：
- 这题要求比较诡异，要求去掉所有特殊字符，能想到的方式只能是用正则了。
- 去除后用你喜欢的方式判断回文串就好了，这里我简单用了双指针

```javascript
var isPalindrome = function (s) {
    s = s.replace(/[^0-9a-z\u0600-\u06FF]/gi, '').toLowerCase();
    let l = 0, r = s.length - 1
    while (l < r) {
        if (s[l] !== s[r]) return false
        l++
        r--
    }
    return true
};
```

[Back to list](../README.md)