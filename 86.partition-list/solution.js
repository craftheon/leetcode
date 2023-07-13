const assert = require('node:assert/strict')

var partition = function (head, x) {
    let s = new ListNode(null), l = new ListNode(null), ps = s, pl = l
    while (head) {
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
(function () {
    // test code here
    console.log('Accepted!')
})()
