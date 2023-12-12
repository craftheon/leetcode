const assert = require('node:assert/strict')

var minDistance = function (word1, word2) {
    let m = word1.length + 1,
        n = word2.length + 1,
        dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        dp[i][0] = i
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = j
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,
                dp[i][j - 1] + 1,
                dp[i - 1][j - 1] + (word1[i - 1] !== word2[j - 1] ? 1 : 0)
            )
        }
    }
    return dp[m - 1][n - 1]
};

(function () {
    // test code here
    console.log('Accepted!')
})()
