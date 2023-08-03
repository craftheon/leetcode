const assert = require('node:assert/strict')

var coinChange = function (coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for (coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};

(function () {
    // test code here
    console.log('Accepted!')
})()
