Zigzag Conversion
---
### Problem
The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)



```

P   A   H   N
A P L S I I G
Y   I   R

```

And then read line by line: `"PAHNAPLSIIGYIR"`


Write the code that will take a string and make this conversion given a number of rows:



```

string convert(string s, int numRows);

```

 


**Example 1:**



```

**Input:** s = "PAYPALISHIRING", numRows = 3
**Output:** "PAHNAPLSIIGYIR"

```

**Example 2:**



```

**Input:** s = "PAYPALISHIRING", numRows = 4
**Output:** "PINALSIGYAHRPI"
**Explanation:**
P     I    N
A   L S  I G
Y A   H R
P     I

```

**Example 3:**



```

**Input:** s = "A", numRows = 1
**Output:** "A"

```

 


**Constraints:**


* `1 <= s.length <= 1000`
* `s` consists of English letters (lower-case and upper-case), `','` and `'.'`.
* `1 <= numRows <= 1000`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：螺旋打印字符串

解题思路：
- 重点判断顶部和底部

```javascript
var convert = function (s, numRows) {
    if (numRows === 1) return s
    let container = Array.from({ length: numRows }, () => []),
        down = true
    curr = 1
    for (let i = 0; i < s.length; i++) {
        container[curr - 1].push(s[i])
        if (down) {
            curr++
            if (curr > numRows) {
                down = false
                curr = numRows - 1
            }
        } else {
            curr--
            if (curr < 1) {
                curr = 2
                down = true
            }
        }
    }
    return container.map(e => e.join('')).join('')
};
```

[Back to list](../README.md)