Reverse Vowels of a String
---
### Problem
Given a string `s`, reverse only all the vowels in the string and return it.


The vowels are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`, and they can appear in both lower and upper cases, more than once.


 


**Example 1:**



```
**Input:** s = "hello"
**Output:** "holle"

```
**Example 2:**



```
**Input:** s = "leetcode"
**Output:** "leotcede"

```

 


**Constraints:**


* `1 <= s.length <= 3 * 105`
* `s` consist of **printable ASCII** characters.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：字符串中的元音字母互相交换位置

解题思路：
- 用对向双指针，两边都遇到元音字母时，则互相交换位置；
- 需要把字符串转为数组操作
- 要考虑大小写情况，大小写要被视为两个不同的元音字符

```javascript
var reverseVowels = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let l = 0, r = s.length - 1, sa = s.split('')
    while (l <= r) {
        if (!vowels.includes(sa[l].toLowerCase())) {
            l++
        } else if (!vowels.includes(sa[r].toLowerCase())) {
            r--
        } else {
            let tmp = sa[l]
            sa[l] = sa[r]
            sa[r] = tmp
            l++
            r--
        }
    }
    return sa.join('')
};
```

[Back to list](../README.md)