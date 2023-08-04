/**
 * fib的一些实现
 */


function fib1(n) {
  if (n === 1 || n === 2) return 1
  return fib1(n - 1) + fib1(n - 2)
}

function fib2(n) {
  if (n < 1) return 0
  const memo = new Array(n + 1).fill(0)

  memo[1] = memo[2] = 1
  function reverse(m) {
    if (m > 0 && memo[m] === 0) {
      memo[m] = reverse(m - 1) + reverse(m - 2)
    }
    return memo[m]
  }
  return reverse(n)
}

function fib3(n) {
  const memo = new Array(n + 1).fill(0)
  memo[1] = memo[2] = 1

  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2]
  }

  return memo[n]
}

function fib4(n) {
  let res = 0
  let dp_1 = 1;
  let dp_2 = 1

  for (let i = 3; i <= n; i++) {
    res = dp_1 + dp_2
    dp_1 = dp_2
    dp_2 = res
  }

  return res
}


// console.time('default')
// console.log(fib1(200))
// console.timeEnd('default')


// console.time('memo')
// console.log(fib2(100))
// console.timeEnd('memo')


// console.time('dp')
// console.log(fib3(100))
// console.timeEnd('dp')


console.time('dp2')
console.log(fib4(2000))
console.timeEnd('dp2')
