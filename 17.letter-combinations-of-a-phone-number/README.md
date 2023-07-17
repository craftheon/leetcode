Letter Combinations of a Phone Number
---
### Problem
Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.


A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


![](https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png)
 


**Example 1:**



```

**Input:** digits = "23"
**Output:** ["ad","ae","af","bd","be","bf","cd","ce","cf"]

```

**Example 2:**



```

**Input:** digits = ""
**Output:** []

```

**Example 3:**



```

**Input:** digits = "2"
**Output:** ["a","b","c"]

```

 


**Constraints:**


* `0 <= digits.length <= 4`
* `digits[i]` is a digit in the range `['2', '9']`.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：2-9电话号码，返回字母组合

解题思路：
- 略

```javascript
var letterCombinations = function(digits) {
    if (!digits.length) return []
    const ans = []
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    function helper(str, index){
        if (str.length == digits.length) {
            ans.push(str)
        } else {
            let alpha = map[digits[index]]

            for(let i = 0; i < alpha.length; i++) {
                helper(str + alpha[i], index + 1)
            }
        }
    }

    helper("", 0)
    return ans
};
```

[Back to list](../README.md)