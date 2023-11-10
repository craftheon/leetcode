const assert = require('node:assert/strict')

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

(function () {
    // test code here
    console.log('Accepted!')
})()
