function flatten(value) {
  if (typeof value !== 'object') {
    return []
  }
  Object.keys(value).forEach(e => {
    const c = flatten(value[e])
    c[e] = value[e]
    console.log(c, value[e])
  })
}

console.log(flatten([1, 2, [3, 4, [5, [6]]]]))