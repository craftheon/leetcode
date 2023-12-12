const assert = require('node:assert/strict')

var generateParenthesis = function (n) {
    let ans = []
    let iterate = (s, o, c) => {
        if (o > n || c > n || c > o) return
        if (s.length === n * 2 && o === c) {
            ans.push(s)
            return
        }
        iterate(s + '(', o + 1, c)
        iterate(s + ')', o, c + 1)
    }
    iterate('', 0, 0)
    return ans
};

(function () {
    // test code here
    console.log('Accepted!')
})()
