Maximum Number of Vowels in a Substring of Given Length
---
### Problem
Given a string `s` and an integer `k`, return *the maximum number of vowel letters in any substring of* `s` *with length* `k`.


**Vowel letters** in English are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`.


 


**Example 1:**



```

**Input:** s = "abciiidef", k = 3
**Output:** 3
**Explanation:** The substring "iii" contains 3 vowel letters.

```

**Example 2:**



```

**Input:** s = "aeiou", k = 2
**Output:** 2
**Explanation:** Any substring of length 2 contains 2 vowels.

```

**Example 3:**



```

**Input:** s = "leetcode", k = 3
**Output:** 2
**Explanation:** "lee", "eet" and "ode" contain 2 vowels.

```

 


**Constraints:**


* `1 <= s.length <= 105`
* `s` consists of lowercase English letters.
* `1 <= k <= s.length`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：判断字符串中k长度的子串最多包含多少个元音字母

解题思路：
- 此题用滑动窗口思路来解，滑动窗口的核心思路在于窗口放大缩小的时机：
- 首先判断窗口右侧的元素，如果是元音则+1，当窗口长度达k值时，要重置窗口位置。
- 因为`s[l]`在之前已经判断过了，所以要减掉。

```javascript
var maxVowels = function (s, k) {
    let ans = 0,
        l = 0,
        r = 0,
        t = 0
    const vlm = ["a", "e", "i", "o", "u"];
    while (r <= s.length) {
        vlm.includes(s[r]) && t++
        ans = Math.max(ans, t)
        if (r - l + 1 == k) {
            vlm.includes(s[l]) && t--
            l++
        }
        r++
    }
    return ans
};
```

[Back to list](../README.md)