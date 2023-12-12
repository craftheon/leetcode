const assert = require('node:assert/strict')

var generate = function (numRows) {
    const p = []
    for (var i = 0; i < numRows; i++) {
        p[i] = []
        p[i][0] = 1
        for (var j = 1; j < i; j++) {
            p[i][j] = p[i - 1][j - 1] + p[i - 1][j]
        }
        p[i][i] = 1
    }
    return p
};

(function () {
    // test code here
    console.log('Accepted!')
})()
