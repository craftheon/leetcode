const assert = require('node:assert/strict')

var rotateRight = function (head, k) {
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

(function () {
    // test code here
    console.log('Accepted!')
})()
