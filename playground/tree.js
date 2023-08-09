
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}



const tree = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(4),
  ),
  new TreeNode(5,
    new TreeNode(5),
  )
)

function deleteTreeTarget(root, target) {
  if (root === null) return null

  root.left = deleteTreeTarget(root.left, target)
  root.right = deleteTreeTarget(root.right, target)
  if (root.val === target && root.left === null && root.right === null) {
    return null
  }
  return root
}

console.log(JSON.stringify(deleteTreeTarget(tree, 5)))