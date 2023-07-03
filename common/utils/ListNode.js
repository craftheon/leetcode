function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function createFromArr(values) {
    if (!values.length) return null
    const l = new ListNode(values[0])
    let p = l
    for (let i = 1; i < values.length; i++) {
        p.next = new ListNode(values[i])
        p = p.next
    }
    return l
}

function reductionToArr(head) {
    if (!head) return []
    const a = []
    while (head.next) {
        a.push(head.val)
        head = head.next
    }
    a.push(head.val)
    return a
}

module.exports = {
    ListNode,
    createFromArr,
    reductionToArr
}

