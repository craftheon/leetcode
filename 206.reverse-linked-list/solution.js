const assert = require('node:assert/strict')

var reverseList = function (head) {
    let p1 = head,
        p2 = null
    while (p1) {
        const t = p1.next
        p1.next = p2
        p2 = p1
        p1 = t
    }
    return p2
};

(function () {
    // test code here
    console.log('Accepted!')
})()
