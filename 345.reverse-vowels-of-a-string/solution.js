const assert = require('node:assert/strict')

var reverseVowels = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let l = 0, r = s.length - 1, sa = s.split('')
    while (l <= r) {
        if (!vowels.includes(sa[l].toLowerCase())) {
            l++
        } else if (!vowels.includes(sa[r].toLowerCase())) {
            r--
        } else {
            let tmp = sa[l]
            sa[l] = sa[r]
            sa[r] = tmp
            l++
            r--
        }
    }
    return sa.join('')
};

(function () {
    // test code here
    console.log('Accepted!')
})()
