Word Pattern
---
### Problem
Given a `pattern` and a string `s`, find if `s` follows the same pattern.


Here **follow** means a full match, such that there is a bijection between a letter in `pattern` and a **non-empty** word in `s`.


 


**Example 1:**



```

**Input:** pattern = "abba", s = "dog cat cat dog"
**Output:** true

```

**Example 2:**



```

**Input:** pattern = "abba", s = "dog cat cat fish"
**Output:** false

```

**Example 3:**



```

**Input:** pattern = "aaaa", s = "dog cat cat dog"
**Output:** false

```

 


**Constraints:**


* `1 <= pattern.length <= 300`
* `pattern` contains only lower-case English letters.
* `1 <= s.length <= 3000`
* `s` contains only lowercase English letters and spaces `' '`.
* `s` **does not contain** any leading or trailing spaces.
* All the words in `s` are separated by a **single space**.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：单词结构和模版一致

解题思路：
- 此题目和[Leetcode 205](../205.isomorphic-strings/README.md)思路一致，位置一样即结构相同

```javascript
var wordPattern = function(pattern, s) {
    let pa = pattern.split(''), sa = s.split(' ')
    if (pa.length !== sa.length) return false
    let pai = [], sai = []

    for(let i = 0; i < pa.length; i ++) {
        pai.push(pa.indexOf(pa[i]))
        sai.push(sa.indexOf(sa[i]))
        if (pai[i] !== sai[i]) return false
    }
    return true
};
```

[Back to list](../README.md)