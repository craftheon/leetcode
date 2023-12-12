Remove Duplicates from Sorted List
---
### Problem
Given the `head` of a sorted linked list, *delete all duplicates such that each element appears only once*. Return *the linked list **sorted** as well*.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2021/01/04/list1.jpg)

```

**Input:** head = [1,1,2]
**Output:** [1,2]

```

**Example 2:**


![](https://assets.leetcode.com/uploads/2021/01/04/list2.jpg)

```

**Input:** head = [1,1,2,3,3]
**Output:** [1,2,3]

```

 


**Constraints:**


* The number of nodes in the list is in the range `[0, 300]`.
* `-100 <= Node.val <= 100`
* The list is guaranteed to be **sorted** in ascending order.

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：删除有序链表中的重复元素

解题思路：
- 略

```javascript
var deleteDuplicates = function (head) {
    let p = head
    while (p) {
        if (p.val === p?.next?.val) {
            p.next = p.next.next
        } else {
            p = p.next
        }
    }
    return head
};

```

[Back to list](../README.md)