Reverse Integer
---
### Problem
Given a signed 32-bit integer `x`, return `x` *with its digits reversed*. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-231, 231 - 1]`, then return `0`.


**Assume the environment does not allow you to store 64-bit integers (signed or unsigned).**


 


**Example 1:**



```

**Input:** x = 123
**Output:** 321

```

**Example 2:**



```

**Input:** x = -123
**Output:** -321

```

**Example 3:**



```

**Input:** x = 120
**Output:** 21

```

 


**Constraints:**


* `-231 <= x <= 231 - 1`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：

解题思路：
- 

```javascript
var reverse = function(x) {
    let absVal = Math.abs(x).toString();
        absVal = absVal.split("").reverse().join("");
    return x > 0 ? (absVal < Math.pow(2,31) - 1 ? absVal : 0) : 
                   (-absVal > -Math.pow(2,31) ? -absVal : 0);
};
```

[Back to list](../README.md)