function eqArr(source, target) {
    if (source.length !== target.length) return false
    for(let i = 0; i < source.length; i ++) {
        if (source[i] !== target[i]) {
            return false
        }
    }
    return true
}


module.exports = {
    judgeWithArray(problem, source, target) {
        if (eqArr(source, target)) {
            console.log("[%s] Accept!", problem) 
            return
        }
        console.error("[%s] Wrong!, Answer: %s / Expected: %s", problem, source, target)
    },
    judgeWithLinkList(problem, source, target) {
        
    },
    judgeWithValue(problem, source, target) {

    }

}