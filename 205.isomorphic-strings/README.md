Isomorphic Strings
---
### Problem
Given two strings `s` and `t`, *determine if they are isomorphic*.


Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.


All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.


 


**Example 1:**



```
**Input:** s = "egg", t = "add"
**Output:** true

```
**Example 2:**



```
**Input:** s = "foo", t = "bar"
**Output:** false

```
**Example 3:**



```
**Input:** s = "paper", t = "title"
**Output:** true

```

 


**Constraints:**


* `1 <= s.length <= 5 * 104`
* `t.length == s.length`
* `s` and `t` consist of any valid ascii character.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：s 和 t 存在某种映射关系，如成立则返回true，否则返回false

解题思路：
- s和t如果结构一样，则在字符串中的相对位置肯定是一样的。

```javascript
var isIsomorphic = function(s, t) {
    if (s.length != t.length) return false;
    let sa = [], ta = []
    for(let i = 0; i < s.length; i ++) {
        sa.push(s.indexOf(s[i]))
        ta.push(t.indexOf(t[i]))
        if (sa[i] != ta[i]) return false
    }
    return true
};
```

[Back to list](../README.md)