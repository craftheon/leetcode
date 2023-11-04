Integer to Roman
---
### Problem
Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.



```

**Symbol**       **Value**
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, `2` is written as `II` in Roman numeral, just two one's added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.


Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:


* `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
* `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
* `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.


Given an integer, convert it to a roman numeral.


 


**Example 1:**



```

**Input:** num = 3
**Output:** "III"
**Explanation:** 3 is represented as 3 ones.

```

**Example 2:**



```

**Input:** num = 58
**Output:** "LVIII"
**Explanation:** L = 50, V = 5, III = 3.

```

**Example 3:**



```

**Input:** num = 1994
**Output:** "MCMXCIV"
**Explanation:** M = 1000, CM = 900, XC = 90 and IV = 4.

```

 


**Constraints:**


* `1 <= num <= 3999`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：罗马字符换算

解题思路：
- 枚举映射关系，注意900/400/90/40/9/4 这几个位置；
- 依次作减法，如果当前计算结果大于数组中的数字对应位置的值，则把对应的罗马数字结果加上。

```javascript
var intToRoman = function (num) {
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let ans = ""
    for (let i = 0; num; i++) {
        while (num >= val[i]) {
            ans += rom[i]
            num -= val[i]
        }
    }
    return ans
};
```

[Back to list](../README.md)