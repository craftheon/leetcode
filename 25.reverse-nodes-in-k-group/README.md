Reverse Nodes in k-Group
---
### Problem
Given the `head` of a linked list, reverse the nodes of the list `k` at a time, and return *the modified list*.


`k` is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of `k` then left-out nodes, in the end, should remain as it is.


You may not alter the values in the list's nodes, only nodes themselves may be changed.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg)

```

**Input:** head = [1,2,3,4,5], k = 2
**Output:** [2,1,4,3,5]

```

**Example 2:**


![](https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg)

```

**Input:** head = [1,2,3,4,5], k = 3
**Output:** [3,2,1,4,5]

```

 


**Constraints:**


* The number of nodes in the list is `n`.
* `1 <= k <= n <= 5000`
* `0 <= Node.val <= 1000`


 


**Follow-up:** Can you solve the problem in `O(1)` extra memory space?


### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：k个一组反转链表

解题思路：
- 

```javascript
var reverseKGroup = function(head, k) {
    var reverse = function(a, b) {
        let pre, cur, nxt;
        pre = null; cur = a; nxt = a;
        while (cur !== b) {
            nxt = cur.next;
            cur.next = pre;
            pre = cur;
            cur = nxt;
        }
        return pre;
    };

    if (head === null) return null;
    let a, b;
    a = b = head;
    for (let i = 0; i < k; i++) {
        if (b === null) return head;
        b = b.next;
    }
    let newHead = reverse(a, b);
    a.next = reverseKGroup(b, k);

    return newHead;
};
```

[Back to list](../README.md)