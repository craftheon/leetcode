Best Time to Buy and Sell Stock
---
### Problem
You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.


You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.


Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.


 


**Example 1:**



```

**Input:** prices = [7,1,5,3,6,4]
**Output:** 5
**Explanation:** Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

```

**Example 2:**



```

**Input:** prices = [7,6,4,3,1]
**Output:** 0
**Explanation:** In this case, no transactions are done and the max profit = 0.

```

 


**Constraints:**


* `1 <= prices.length <= 105`
* `0 <= prices[i] <= 104`

### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：股票买卖最佳时机（初阶版）

解题思路：
- 可直接遍历得到结果，也可以用动态规划来解决；
- 直接遍历：保存当前最低的价格，后面找到高价的就进行价格计算，否则继续保存。
- 动态规划：

```javascript
// 直接遍历
var maxProfit = function(prices) {
    let max = 0
    let min = prices[0]
    for(let i = 0; i < prices.length; i ++) {
       const cur = prices[i]
       if (cur < min) {
           min = cur
       }
       if (cur - min > max) {
           max = cur - min
       }
    }
    return max
};


```

[Back to list](../README.md)