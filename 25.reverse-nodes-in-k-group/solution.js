const assert = require('node:assert/strict')

var reverseKGroup = function (head, k) {
    var reverse = function (a, b) {
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

(function () {
    // test code here
    console.log('Accepted!')
})()
