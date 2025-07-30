var maxProfit = function (prices, fee) {
  let len = prices.length
  let dp = new Array(len).fill('').map(item => new Array(2).fill(0))

  dp[0][0] = - prices[0]

  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee)
  }

  return dp[len - 1][1]

};