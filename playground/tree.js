
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}



// const tree = new TreeNode(1,
//   new TreeNode(2,
//     new TreeNode(4),
//   ),
//   new TreeNode(5,
//     new TreeNode(5),
//   )
// )

function deleteTreeTarget(root, target) {
  if (root === null) return null

  root.left = deleteTreeTarget(root.left, target)
  root.right = deleteTreeTarget(root.right, target)
  if (root.val === target && root.left === null && root.right === null) {
    return null
  }
  return root
}

function buildTree(preorder, inorder) {
  const build = function (arr) {
    if (!arr.length) return null
    const val = preorder.shift()
    const idx = arr.indexOf(val)
    const node = new TreeNode(val)
    node.left = build(arr.slice(0, idx))
    node.right = build(arr.slice(idx + 1))
    return node
  }
  return build(inorder)
}

const tree = new TreeNode(
  10,
  new TreeNode(
    5,
    new TreeNode(
      3,
      new TreeNode(3),
      new TreeNode(-2)
    ),
    new TreeNode(
      2,
      null,
      new TreeNode(1)
    )
  ),
  new TreeNode(
    -3,
    null,
    new TreeNode(11)
  )
)

function dfs(node) {
  if (!node) return null
  console.log('front', node.val)
  dfs(node.left)
  console.log('min', node.val)
  dfs(node.right)
}
dfs(tree)
