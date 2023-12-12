Remove Nth Node From End of List
---
### Problem
Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)

```

**Input:** head = [1,2,3,4,5], n = 2
**Output:** [1,2,3,5]

```

**Example 2:**



```

**Input:** head = [1], n = 1
**Output:** []

```

**Example 3:**



```

**Input:** head = [1,2], n = 1
**Output:** [1]

```

 


**Constraints:**


* The number of nodes in the list is `sz`.
* `1 <= sz <= 30`
* `0 <= Node.val <= 100`
* `1 <= n <= sz`


 


**Follow up:** Could you do this in one pass?


### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：从链表的末尾移除第n个元素

解题思路：
- 先遍历链表获得长度，在用长度减n得到需要移除的位置，时间复杂度O(n)

```javascript
var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(0)
    dummy.next = head
    var p = dummy, len = 0
    while(p) { len ++; p = p.next }
    var t = len - n, c = dummy, i = 0
    while(c) {
        i ++
        if (i == t) {
            c.next = c.next.next
        } else {
            c = c.next
        }
    }
    return dummy.next
};
```

[Back to list](../README.md)