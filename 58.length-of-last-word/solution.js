const assert = require('node:assert/strict')

var lengthOfLastWord = function (s) {
    const words = s.split(" ").filter(e => e !== "")
    return words[words.length - 1].length
};

(function () {
    // test code here
    console.log('Accepted!')
})()
