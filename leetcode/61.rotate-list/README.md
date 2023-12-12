Rotate List
---
### Problem
Given the `head` of a linked list, rotate the list to the right by `k` places.


 


**Example 1:**


![](https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg)

```

**Input:** head = [1,2,3,4,5], k = 2
**Output:** [4,5,1,2,3]

```

**Example 2:**


![](https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg)

```

**Input:** head = [0,1,2], k = 4
**Output:** [2,0,1]

```

 


**Constraints:**


* The number of nodes in the list is in the range `[0, 500]`.
* `-100 <= Node.val <= 100`
* `0 <= k <= 2 * 109`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：第k个节点后的所有节点移动到链表的最头部

解题思路：
- 快慢指针，左指针和右指针中间间隔k个节点，右指针移动到链表末尾结束，左右指针中间的节点移到链表的最头部。

```javascript
var rotateRight = function(head, k) {
  if (!head) return head;
	let len = 0,
		ptr = head;

	while (ptr) {
		len++;
		ptr = ptr.next;
	}
    k = k % len;
	let prev = head;
	ptr = head;

    while (k--) {
		ptr = ptr.next;
	}

	while (ptr.next) {
		prev = prev.next;
		ptr = ptr.next;
	}

    ptr.next = head;
	head = prev.next;
	prev.next = null;
	return head;
};
```

[Back to list](../README.md)