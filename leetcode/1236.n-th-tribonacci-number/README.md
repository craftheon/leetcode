N-th Tribonacci Number
---
### Problem
The Tribonacci sequence Tn is defined as follows: 


T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.


Given `n`, return the value of Tn.


 


**Example 1:**



```

**Input:** n = 4
**Output:** 4
**Explanation:**
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4

```

**Example 2:**



```

**Input:** n = 25
**Output:** 1389537

```

 


**Constraints:**


* `0 <= n <= 37`
* The answer is guaranteed to fit within a 32-bit integer, ie. `answer <= 2^31 - 1`.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：fibonacci变体

解题思路：
- 略

```javascript
var tribonacci = function(n) {
    const dp = new Array(n + 1).fill(0)
    dp[1] = 1 
    dp[2] = 1
    for(let i = 3; i <= n; i ++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
    }
    return dp[n]
};
```

[Back to list](../README.md)