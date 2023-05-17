两数之和
---

### 题解

```javascript
function twoSum(nums, target) {
    const map = {}
    for (const [index, num] of nums.entries()) {
        if (map[target - num] !== undefined) {
            return [map[target - num], index]
        }
        map[num] = index
    }
    return []
}
```
以上用O(n)的解法实现两数之和的运算：

- 用一个map存储target - num的结果，如果之前没有出现过，就先缓存起来
- 后面的遍历过程中target - num的结果只要出现在map中，则说明条件符合，返回结果即可

#### 分步运行示例
step 1:

```javascript
function twoSum(nums, target) { // [2, 7, 11, 15]  9
    const map = {}
    for (const [index, num] of nums.entries()) {
        if (map[target - num] !== undefined) { // map[7] ❌
            return [map[target - num], index]
        }
        map[num] = index // <- map[2] = 0
    }
    return []
}
```

step 2:

```javascript
function twoSum(nums, target) { // [2, 7, 11, 15]  9
    const map = {}
    for (const [index, num] of nums.entries()) {
        if (map[target - num] !== undefined) { // map[2] ✅ value = 7
            return [map[target - num], index]  // <- [0, 1]
        }
        map[num] = index
    }
    return []
}
```