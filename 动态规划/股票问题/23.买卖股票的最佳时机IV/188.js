var maxProfit = function (k, prices) {
  if (prices.length == 1) return 0

  const len = prices.length
  const dp = new Array(len).fill(0).map(x => new Array(k * 2 + 1).fill(0));

  for (let i = 1; i < k * 2; i += 2) {
    dp[0][i] = - prices[0]
  }


  for (let i = 1; i < len; i++) {
    for (let j = 0; j < k * 2; j += 2) {
      dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] - prices[i])
      dp[i][j + 2] = Math.max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i])
    }
  }
  console.log(dp)
  return dp[len - 1][2 * k]
};