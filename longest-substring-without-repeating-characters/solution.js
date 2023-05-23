const assert = require('node:assert/strict')

/**
 * solution1
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function(s) {
    var res = 0
    var arr = []

    for(let num of s) {
        while(arr.includes(num)) {
            arr.shift()
        }
        arr.push(num)
        res = Math.max(res, arr.length)
    }
    
    return res
};

/**
 * solution2
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function(s) {
    let map = new Map(), max = 0
    for(let i = 0, j = 0; j < s.length; j++) {
        if(map.has(s[j])) {
            i = Math.max(map.get(s[j]) + 1, i)
        }
        max = Math.max(max, j - i + 1)
        map.set(s[j], j)
    }
    return max
};


(function() {
    assert.deepEqual(lengthOfLongestSubstring1('abcabcbb'), 3)
    assert.deepEqual(lengthOfLongestSubstring2('bbbbb'), 1)
    assert.deepEqual(lengthOfLongestSubstring2('pwwkew'), 3)
    console.log("Accepted!")
})()