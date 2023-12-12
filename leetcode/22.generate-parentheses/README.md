Generate Parentheses
---
### Problem
Given `n` pairs of parentheses, write a function to *generate all combinations of well-formed parentheses*.


 


**Example 1:**



```
**Input:** n = 3
**Output:** ["((()))","(()())","(())()","()(())","()()()"]

```
**Example 2:**



```
**Input:** n = 1
**Output:** ["()"]

```

 


**Constraints:**


* `1 <= n <= 8`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：每组n个有效括号，输出可能存在的有效括号的组合

解题思路：
- 

```javascript
var generateParenthesis = function (n) {
    let ans = []
    let iterate = (s, o, c) => {
        if (o > n || c > n || c > o) return
        if (s.length === n * 2 && o === c) {
            ans.push(s)
            return
        }
        iterate(s + '(', o + 1, c)
        iterate(s + ')', o, c + 1)
    }
    iterate('', 0, 0)
    return ans
}
```

[Back to list](../README.md)