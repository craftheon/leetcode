
function LinkNode(val, next) {
  this.val = val
  this.next = next || null
}

Array.prototype.toLL = function () {
  let head = new LinkNode(null)
  let ptr = head
  if (!this.length) return head.next
  for (let i = 0; i < this.length; i++) {
    const elm = this[i];
    ptr.next = new LinkNode(elm)
    ptr = ptr.next
  }
  return head.next
}

LinkNode.prototype.toArr = function () {
  let head = this
  if (!head) return []
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return arr
}

// 递归反转
function reverse(head) {
  if (head === null || head.next === null) return head
  let last = reverse(head.next) // 2
  head.next.next = head
  head.next = null
  return last
}

// 非递归反转
function reverse2(head) {
  let pre = null
  let cur = head
  while (cur) {
    let temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
}

// 从末尾第n个反转，例如，1，2，3，4，5  n = 2； => 4，5，1，2，3
function reverseLastN(head, n) {
  let i = 0
  let l = r = head
  let newLink = new LinkNode(null)
  let pn = newLink
  while (r) {
    if (i < n) {
      i++
      r = r.next
    } else {
      pn.next = new LinkNode(l.val)
      pn = pn.next
      l = l.next
      r = r.next
    }
  }
  let pl = l
  while (pl.next) {
    pl = pl.next
  }

  pl.next = newLink.next
  return l
}

// 从末尾第n个反转，Leetcode解法，例如，1，2，3，4，5  n = 2； => 4，5，1，2，3
function reverseLastN2(head, n) {
  if (!head) return head;
  let len = 0, ptr = head;

  while (ptr) { len++; ptr = ptr.next }

  n = n % len;

  let prev = head;
  ptr = head;

  while (n--) { ptr = ptr.next }

  while (ptr.next) {
    prev = prev.next;
    ptr = ptr.next;
  }

  ptr.next = head;
  head = prev.next;
  prev.next = null;

  return head;
}


console.log(reverseLastN2([1, 2, 3, 4, 5].toLL(), 2).toArr())