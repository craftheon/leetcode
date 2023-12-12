const assert = require('node:assert/strict')

var mergeAlternately = function (word1, word2) {
    let ans = "",
        len = Math.max(word1.length, word2.length)
    for (let i = 0; i < len; i++) {
        let w1 = word1[i], w2 = word2[i]
        if (w1) { ans = ans + w1 }
        if (w2) { ans = ans + w2 }
    }
    return ans
};

(function () {
    // test code here
    console.log('Accepted!')
})()
