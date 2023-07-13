String Compression
---
### Problem
Given an array of characters `chars`, compress it using the following algorithm:


Begin with an empty string `s`. For each group of **consecutive repeating characters** in `chars`:


* If the group's length is `1`, append the character to `s`.
* Otherwise, append the character followed by the group's length.


The compressed string `s` **should not be returned separately**, but instead, be stored **in the input character array `chars`**. Note that group lengths that are `10` or longer will be split into multiple characters in `chars`.


After you are done **modifying the input array,** return *the new length of the array*.


You must write an algorithm that uses only constant extra space.


 


**Example 1:**



```

**Input:** chars = ["a","a","b","b","c","c","c"]
**Output:** Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
**Explanation:** The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

```

**Example 2:**



```

**Input:** chars = ["a"]
**Output:** Return 1, and the first character of the input array should be: ["a"]
**Explanation:** The only group is "a", which remains uncompressed since it's a single character.

```

**Example 3:**



```

**Input:** chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
**Output:** Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
**Explanation:** The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
```

 


**Constraints:**


* `1 <= chars.length <= 2000`
* `chars[i]` is a lowercase English letter, uppercase English letter, digit, or symbol.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：字符串压缩，例如aabbccc，压缩为a2b2c3的格式。

解题思路：
- 此题要求在原数组上操作，不能开辟额外的增长空间，看到这种在原链表、数组上操作的题目，应首先想到快慢指针
- 此题定义快慢指针，快指针遍历重复元素，有重复则增加，慢指针用来记录元素和元素的个数，快指针遍历完全部元素则结束

```javascript
var compress = function(chars) {
    let i = 0, j = 0
    while(j < chars.length) {
        let count = 0, cur = chars[j]
        while(j < chars.length && chars[j] === cur) {
            j ++
            count ++
        }
        chars[i++] = cur
        if (count > 1) {
            for(let d of count.toString()) {
                chars[i++] = d
            }
        }
    }
    return i
};
```

[Back to list](../README.md)