Guess Number Higher or Lower
---
### Problem
We are playing the Guess Game. The game is as follows:


I pick a number from `1` to `n`. You have to guess which number I picked.


Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.


You call a pre-defined API `int guess(int num)`, which returns three possible results:


* `-1`: Your guess is higher than the number I picked (i.e. `num > pick`).
* `1`: Your guess is lower than the number I picked (i.e. `num < pick`).
* `0`: your guess is equal to the number I picked (i.e. `num == pick`).


Return *the number that I picked*.


 


**Example 1:**



```

**Input:** n = 10, pick = 6
**Output:** 6

```

**Example 2:**



```

**Input:** n = 1, pick = 1
**Output:** 1

```

**Example 3:**



```

**Input:** n = 2, pick = 1
**Output:** 1

```

 


**Constraints:**


* `1 <= n <= 231 - 1`
* `1 <= pick <= n`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：猜数字，系统给定一个guess函数，调用后返回是否猜中，0表示猜中，-1表示小了，1表示大了。

解题思路：
- 典型的二分查找思路

```javascript
var guessNumber = function (n) {
    const find = function (start, end) {
        const mid = Math.floor((start + end) / 2)
        if (guess(mid) === 0) return mid
        if (guess(mid) === -1) return find(start, mid - 1)
        if (guess(mid) === 1) return find(mid + 1, end)
    }
    return find(0, n)
}
```

[Back to list](../README.md)