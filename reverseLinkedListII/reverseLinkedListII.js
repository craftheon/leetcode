const assert = require('node:assert/strict')
const { ListNode, createFromArr, reductionToArr } = require('../utils/ListNode')

function reverseN(head, n) {
    if (n == 1) {
        successor = head.next;
        return head;
    }
    var last = reverseN(head.next, n - 1);

    head.next.next = head;
    head.next = successor;
    return last;
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, left, right) {
    if(left === 1) {
        return reverseN(head, right);
    }
    head.next = reverseBetween(head.next, left - 1, right - 1);
    return head;
};


(function() {
    assert.deepEqual(reductionToArr(reverseBetween(createFromArr([1, 2, 3, 4, 5]), 2, 4)), [1, 4, 3, 2, 5])
    assert.deepEqual(reductionToArr(reverseBetween(createFromArr([1, 2, 3, 4, 5]), 3, 5)), [1, 2, 5, 4, 3])
    console.log("Accepted!")
})()
 