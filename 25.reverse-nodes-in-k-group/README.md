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
- 解法1，递归
- 解法2，快慢指针：快指针与慢指针相隔的区间做链表反转，其他节点按原顺序相连

```javascript
// 反转链表：leecode-206
function reverse(link, area) {
    let p = link,
        pre = null
    while (p !== area) {
        const tmp = p.next
        p.next = pre
        pre = p
        p = tmp
    }
    return pre
}

// 解法1
var reverseKGroup = function(head, k) {
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

// 解法2
var reverseKGroup = function (head, k) {
    let idx = 0,
    last = head,
    newHead = new ListNode(null),
    np = newHead
    while (head) {
        idx ++
        head = head.next
        if (idx === k) {
        let tmp = reverse(last, head)
        np.next = tmp
        while (tmp.next) {
            tmp = tmp.next
        }
        np = tmp
        idx = 0
        last = head
        }
    }
    np.next = last
    return newHead.next
};

```

[Back to list](../README.md)