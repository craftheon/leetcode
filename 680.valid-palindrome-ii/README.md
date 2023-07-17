Valid Palindrome II
---
### Problem
Given a string `s`, return `true` *if the* `s` *can be palindrome after deleting **at most one** character from it*.


 


**Example 1:**



```

**Input:** s = "aba"
**Output:** true

```

**Example 2:**



```

**Input:** s = "abca"
**Output:** true
**Explanation:** You could delete the character 'c'.

```

**Example 3:**



```

**Input:** s = "abc"
**Output:** false

```

 


**Constraints:**


* `1 <= s.length <= 105`
* `s` consists of lowercase English letters.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：判断回文字符串，最多可以删掉一个元素

解题思路：
- 对向双指针遍历字符串，遇到不匹配时，向前或向后跳一次，如果匹配到回文串，则成功

```javascript
var validPalindrome = function(s) {
    function isPolindrom(l,r){
        while(l<r) {
            if(s[l++]!==s[r--]) {
                return false
            }
        }
        return true
    }

    let l = 0, r = s.length - 1

    while(l<r){
        if(s[l]!== s[r]) return isPolindrom(l+1,r) || isPolindrom(l,r-1)
        l++;
        r--;
    }
    return true
};

```

[Back to list](../README.md)