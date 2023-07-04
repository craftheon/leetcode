var maxArea = function (height) {
  var l = 0, r = height.length - 1
  var res = 0
  while (l < r) {
    var h = 0, w = r - l
    if (height[l] < height[r]) {
      h = height[l]
      l++
    } else {
      h = height[r]
      r--
    }
    t = h * w
    res = Math.max(t, res)
  }
  return res
};