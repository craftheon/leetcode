const assert = require('node:assert/strict')

var wordBreak = function (s, wordDict) {
    let n = s.length, dp = new Array(n + 1).fill(false), words = new Set(wordDict)
    dp[0] = true
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && words.has(s.substring(j, i))) {
                dp[i] = true
                break
            }
        }
    }
    return dp[n]
};

(function () {
    // test code here
    console.log('Accepted!')
})()
