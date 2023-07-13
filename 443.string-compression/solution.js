const assert = require('node:assert/strict')

var compress = function (chars) {
    let i = 0, j = 0
    while (j < chars.length) {
        let count = 0, cur = chars[j]
        while (j < chars.length && chars[j] === cur) {
            j++
            count++
        }
        chars[i++] = cur
        if (count > 1) {
            for (let d of count.toString()) {
                chars[i++] = d
            }
        }
    }
    return i
};

(function () {
    // test code here
    console.log('Accepted!')
})()
