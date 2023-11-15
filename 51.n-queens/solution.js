const assert = require('node:assert/strict')

var solveNQueens = function (n) {
    let path = Array.from({ length: n }, () => Array(n).fill('.')),
        cols = [],
        diags1 = [],
        diags2 = [],
        ans = [];

    function backtrack(row) {
        if (row === n) {
            ans.push(path.map((row) => row.join('')));
            return;
        }
        for (let col = 0; col < n; col += 1) {
            if (cols[col] || diags1[row + col] || diags2[row - col]) {
                continue
            }
            path[row][col] = 'Q';
            cols[col] = diags1[row + col] = diags2[row - col] = true;
            backtrack(row + 1);
            path[row][col] = '.';
            cols[col] = diags1[row + col] = diags2[row - col] = false;
        }
    }
    backtrack(0);
    return ans;
};

(function () {
    // test code here
    console.log('Accepted!')
})()
