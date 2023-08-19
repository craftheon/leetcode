const assert = require('node:assert/strict')

var wordPattern = function (pattern, s) {
    let pa = pattern.split(''), sa = s.split(' ')
    if (pa.length !== sa.length) return false
    let pai = [], sai = []

    for (let i = 0; i < pa.length; i++) {
        pai.push(pa.indexOf(pa[i]))
        sai.push(sa.indexOf(sa[i]))
        if (pai[i] !== sai[i]) return false
    }
    return true
};

(function () {
    // test code here
    console.log('Accepted!')
})()
