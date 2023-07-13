Partition List
---
### Problem
Given the `head` of a linked list and a value `x`, partition it such that all nodes **less than** `x` come before nodes **greater than or equal** to `x`.


You should **preserve** the original relative order of the nodes in each of the two partitions.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2021/01/04/partition.jpg)

```

**Input:** head = [1,4,3,2,5,2], x = 3
**Output:** [1,2,2,4,3,5]

```

**Example 2:**



```

**Input:** head = [2,1], x = 2
**Output:** [1,2]

```

 


**Constraints:**


* The number of nodes in the list is in the range `[0, 200]`.
* `-100 <= Node.val <= 100`
* `-200 <= x <= 200`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：给一个链表和一个k，要求比k小的元素排在左边，大于等于k的排在右边，但排列时尽量保证原有的顺序。

解题思路：
- 因为题目要求链表中保留原有顺序，并且不要求在原有链表上改动，所以可以直接构建两个链表
- 链表1保存比k小的元素，链表2保存比k大的元素
- 最后返回链表1+链表2

```javascript
var partition = function(head, x) {
    let s = new ListNode(null), l = new ListNode(null), ps = s, pl = l
    while(head) {
        if (head.val >= x) {
            pl.next = new ListNode(head.val)
            pl = pl.next
        } else {
            ps.next = new ListNode(head.val)
            ps = ps.next
        }
        head = head.next
    }
    ps.next = l.next
    return s.next
};
```

[Back to list](../README.md)