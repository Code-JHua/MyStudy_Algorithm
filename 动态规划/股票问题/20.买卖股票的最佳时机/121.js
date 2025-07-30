var maxProfit = function (prices) {
  let dp = new Array(prices.length).fill('').map(item => new Array(2).fill(0));

  dp[0][0] = -prices[0]; // 第0天买入
  dp[0][1] = 0;          // 第0天不持有（未买入）

  for (let i = 1; i < prices.length; i++) {
    // 第i天持有：要么前一天就持有，要么今天买入
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
    // 第i天不持有：要么前一天就不持有，要么今天卖出（用今天的价格）
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }

  console.log(dp);
  // 最大利润是最后一天不持有股票时的利润（因为持有股票肯定不如卖出）
  return dp[prices.length - 1][1];
};