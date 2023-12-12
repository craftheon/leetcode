const assert = require('node:assert/strict')

var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] === 1) {
        return 0
    }
    let m = obstacleGrid.length,
        n = obstacleGrid[0].length,
        dp = new Array(m).fill(0).map(() => new Array(n).fill(0))

    dp[0][0] = 1
    for (let i = 1; i < m; i++) {
        dp[i][0] = (obstacleGrid[i][0] === 0 && dp[i - 1][0] === 1) ? 1 : 0
    }
    for (let j = 1; j < n; j++) {
        dp[0][j] = (obstacleGrid[0][j] === 0 && dp[0][j - 1] === 1) ? 1 : 0
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
        }
    }
    return dp[m - 1][n - 1]
};

(function () {
    // test code here
    console.log('Accepted!')
})()
