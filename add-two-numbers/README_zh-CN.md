两数相加
---

### 题解
```javascript
function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(-1);
    let p = dummy;
    let carry = 0;
    while (l1 != null || l2 != null || carry > 0) {
      let val = carry;
      if (l1 != null) {
        val += l1.val;
        l1 = l1.next;
      }
      if (l2 != null) {
        val += l2.val;
        l2 = l2.next;
      }
      carry = Math.floor(val / 10);
      val = val % 10;
      p.next = new ListNode(val);
      p = p.next;
    }
    return dummy.next;
};
```

加法题，可用双指针来解题，要注意进位和循环结束的条件；

特别注意，循环结束时不仅l1和l2要遍历完，同时进位也必须要算完。
