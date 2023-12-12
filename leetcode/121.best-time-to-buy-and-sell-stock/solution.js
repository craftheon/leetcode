const assert = require('node:assert/strict')

var maxProfit = function (prices) {
    let max = 0
    let min = prices[0]
    for (let i = 0; i < prices.length; i++) {
        const cur = prices[i]
        if (cur < min) {
            min = cur
        }
        if (cur - min > max) {
            max = cur - min
        }
    }
    return max
};

(function () {
    // test code here
    console.log('Accepted!')
})()
