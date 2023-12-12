const assert = require('node:assert/strict')

var uniquePaths = function (m, n) {
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    dp[1][0] = 1
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m][n]
};

(function () {
    // test code here
    console.log('Accepted!')
})()
