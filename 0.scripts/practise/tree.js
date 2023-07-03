function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

Array.prototype.toTree = function () {
  const arr = this

}

/**
 *             1
 *            / \
 *           2   3
 *          / \   / \
 *         4   5  6  7
 */
const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)))

// 递归
var traverseFirst = function (root) {
  const res = []
  if (root === null) return res
  res.push(root.val)
  res.push(...traverseFirst(root.left))
  res.push(...traverseFirst(root.right))
  return res
}
// 栈
var traverseFirst2 = function (root) {
  const res = []
  const stack = [root]
  while (stack.length) {
    const cur = stack.pop()
    res.push(cur.val)
    cur.right && stack.push(cur.right)
    cur.left && stack.push(cur.left)
  }
  return res
}
// 递归
var traverseMid = function (root) {
  const res = []
  if (root === null) return res
  res.push(...traverseMid(root.left))
  res.push(root.val)
  res.push(...traverseMid(root.right))
  return res
}
// 栈
var traverseMid2 = function (root) {
  const res = []
  const stack = [root]
  while (stack.length) {
    const cur = stack.pop()
    cur.right && stack.push(cur.right)
    res.push(cur.val)
    cur.left && stack.push(cur.left)
  }
  return res
}
// 递归
var traverseAfter = function (root) {
  const res = []
  if (root === null) return res
  res.push(...traverseAfter(root.left))
  res.push(...traverseAfter(root.right))
  res.push(root.val)
  return res
}
// 栈
var traverseAfter2 = function (root) {
  const res = []
  const stack = [root]
  while (stack.length) {
    const cur = stack.pop()
    cur.right && stack.push(cur.right)
    cur.left && stack.push(cur.left)
    res.push(cur.val)
  }
  return res
}

console.log(traverseFirst(tree))
// console.log(traverseFirst2(tree))
console.log(traverseMid(tree))
// console.log(traverseMid2(tree))
console.log(traverseAfter(tree))
// console.log(traverseAfter2(tree))

var traverse = function (root) {
  if (root === null) return;
  console.log("从节点 " + root?.val + " 进入节点 " + root.left?.val);
  traverse(root.left);
  console.log("从节点 " + root.left?.val + " 回到节点 " + root?.val);

  console.log("从节点 " + root?.val + " 进入节点 " + root.right?.val);
  traverse(root.right);
  console.log("从节点 " + root.right?.val + " 回到节点 " + root?.val);
}

traverse(tree)