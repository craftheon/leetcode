const assert = require('node:assert/strict')

var maximalSquare = function (matrix) {
    let m = matrix.length + 1,
        n = matrix[0].length + 1,
        dp = new Array(m).fill(null).map(() => new Array(n).fill(0)),
        max = -Infinity
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i - 1][j - 1] == "1") {
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1
                max = Math.max(dp[i][j], max)
            }
        }
    }
    return max === -Infinity ? 0 : max * max
};

(function () {
    // test code here
    console.log('Accepted!')
})()
