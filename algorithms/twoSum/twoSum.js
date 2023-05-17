const judge = require('../../utils/judge')

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


(function() {
    judge.judgeWithArray('twoSum', twoSum([2, 7, 11, 15], 9), [0, 1])
    judge.judgeWithArray('twoSum', twoSum([3, 2, 4], 6), [1, 2])
    judge.judgeWithArray('twoSum', twoSum([1, 7, 7], 8), [0, 1])

})()