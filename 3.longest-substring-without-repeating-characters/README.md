Longest Substring Without Repeating Characters
---
### Problem
Given a string `s`, find the length of the **longest** **substring** without repeating characters.


 


**Example 1:**



```

**Input:** s = "abcabcbb"
**Output:** 3
**Explanation:** The answer is "abc", with the length of 3.

```

**Example 2:**



```

**Input:** s = "bbbbb"
**Output:** 1
**Explanation:** The answer is "b", with the length of 1.

```

**Example 3:**



```

**Input:** s = "pwwkew"
**Output:** 3
**Explanation:** The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

```

 


**Constraints:**


* `0 <= s.length <= 5 * 104`
* `s` consists of English letters, digits, symbols and spaces.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：不重复的子串的最大长度

解题思路：
- 略

```javascript
var lengthOfLongestSubstring = function(s) {
    let ss = [], max = 0

    for(let i = 0; i < s.length; i ++) {
        const idx = ss.indexOf(s[i])
        if (idx !== -1) {
            ss.splice(0, idx + 1)
        }
        ss.push(s[i])
        max = Math.max(ss.length, max)
    }

    return max
};
```

[Back to list](../README.md)