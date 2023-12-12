const assert = require('node:assert/strict')

var tribonacci = function (n) {
    const dp = new Array(n + 1).fill(0)
    dp[1] = 1
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
    }
    return dp[n]
};

(function () {
    // test code here
    console.log('Accepted!')
})()
