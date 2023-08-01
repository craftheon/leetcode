// 快速排序代码实现

/**
 * 快速排序逻辑:
 * 若要对 nums[lo..hi] 进行排序，我们先找一个分界点 p，
 * 通过交换元素使得 nums[lo..p-1] 都小于等于 nums[p]，且 nums[p+1..hi] 都大于 nums[p]，
 * 然后递归地去 nums[lo..p-1] 和 nums[p+1..hi] 中寻找新的分界点，最后整个数组就被排序了。
 * @param {*} nums 
 */
function sort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr.splice(0, 1);
  let left = [], right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot[0]) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }

  return sort(left).concat(pivot).concat(sort(right));
}

