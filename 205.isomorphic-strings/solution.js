const assert = require('node:assert/strict')

var isIsomorphic = function (s, t) {
    if (s.length != t.length) return false;
    let sa = [], ta = []
    for (let i = 0; i < s.length; i++) {
        sa.push(s.indexOf(s[i]))
        ta.push(t.indexOf(t[i]))
        if (sa[i] != ta[i]) return false
    }
    return true
};
(function () {
    // test code here
    console.log('Accepted!')
})()
