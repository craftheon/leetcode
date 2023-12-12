Longest Common Prefix
---
### Problem
Write a function to find the longest common prefix string amongst an array of strings.


If there is no common prefix, return an empty string `""`.


 


**Example 1:**



```

**Input:** strs = ["flower","flow","flight"]
**Output:** "fl"

```

**Example 2:**



```

**Input:** strs = ["dog","racecar","car"]
**Output:** ""
**Explanation:** There is no common prefix among the input strings.

```

 


**Constraints:**


* `1 <= strs.length <= 200`
* `0 <= strs[i].length <= 200`
* `strs[i]` consists of only lowercase English letters.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：找到最长公共前缀

解题思路：
- 按顺序遍历即可

```javascript
var longestCommonPrefix = function(strs) {
    let prefix = strs[0]
    for(let i = 1; i < strs.length; i ++) {
        let cp = '', len = Math.min(prefix.length, strs[i].length)
        for(let j = 0; j < len; j ++) {
            if (prefix[j] != strs[i][j]) {
                break
            }
            cp += prefix[j]
        }
        prefix = cp      
    }
    return prefix
};
```

[Back to list](../README.md)