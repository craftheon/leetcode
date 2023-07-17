const assert = require('node:assert/strict')

var letterCombinations = function (digits) {
    if (!digits.length) return []
    const ans = []
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    function helper(str, index) {
        if (str.length == digits.length) {
            ans.push(str)
        } else {
            let alpha = map[digits[index]]

            for (let i = 0; i < alpha.length; i++) {
                helper(str + alpha[i], index + 1)
            }
        }
    }

    helper("", 0)
    return ans
};

(function () {
    // test code here
    console.log('Accepted!')
})()
