const assert = require('node:assert/strict')
const { ListNode, createFromArr, reductionToArr } = require('../utils/ListNode')

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
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

(function() {
    const res = addTwoNumbers(createFromArr([2, 4, 3]), createFromArr([5, 6, 4]))
    assert.deepEqual(reductionToArr(res), [7, 0, 8])
    console.log('Accepted!')
})()