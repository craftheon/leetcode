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
