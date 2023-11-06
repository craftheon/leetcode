const assert = require('node:assert/strict')

var convert = function (s, numRows) {
    if (numRows === 1) return s
    let container = Array.from({ length: numRows }, () => []),
        down = true
    curr = 1
    for (let i = 0; i < s.length; i++) {
        container[curr - 1].push(s[i])
        if (down) {
            curr++
            if (curr > numRows) {
                down = false
                curr = numRows - 1
            }
        } else {
            curr--
            if (curr < 1) {
                curr = 2
                down = true
            }
        }
    }
    return container.map(e => e.join('')).join('')
};

(function () {
    // test code here
    console.log('Accepted!')
})()
