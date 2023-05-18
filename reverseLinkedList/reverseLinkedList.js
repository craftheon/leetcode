const assert = require('node:assert/strict')
const { ListNode, createFromArr, reductionToArr } = require('../utils/ListNode')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    if (head === null || head.next === null) return head
    const last = reverseList(head.next)
    head.next.next = head
    head.next = null
    return last

}

(function() {
    assert.deepEqual(reductionToArr(reverseList(createFromArr([1, 2, 3, 4, 5]))), [5, 4, 3, 2, 1])
    assert.deepEqual(reductionToArr(reverseList(createFromArr([]))), [])
    assert.deepEqual(reductionToArr(reverseList(createFromArr([1, 2]))), [2, 1])
    console.log('Accepted!')
})()


