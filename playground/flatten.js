// 递归实现
function flatten(value) {
  let res = []
  for (let i = 0; i < value.length; i++) {
    if (Array.isArray(value[i])) {
      res = res.concat(flatten(value[i]))
    } else {
      res.push(value[i])
    }
  }
  return res
}

console.log(flatten([1, 2, [3, 4, [5, [6]]]]))