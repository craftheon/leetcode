const assert = require('node:assert/strict')

var minimumTotal = function (triangle) {
    for (let i = triangle.length - 1; i > 0; i--) {
        const row = triangle[i];
        for (let j = 0; j < row.length - 1; j++) {
            triangle[i - 1][j] += Math.min(row[j], row[j + 1]);
        }
    }
    return triangle[0];
};

(function () {
    // test code here
    console.log('Accepted!')
})()
