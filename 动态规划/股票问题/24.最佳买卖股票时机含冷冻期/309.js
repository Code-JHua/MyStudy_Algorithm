var maxProfit = function (prices) {
  const n = prices.length;
  if (n <= 1) return 0;

  // dp[i][0]: 第i天持有股票的最大利润
  // dp[i][1]: 第i天不持有股票且不在冷冻期（可以买入）的最大利润
  // dp[i][2]: 第i天不持有股票且在冷冻期（刚卖出，不能买入）的最大利润
  const dp = new Array(n).fill(0).map(() => new Array(3).fill(0));

  dp[0][0] = -prices[0]; // 第0天买入
  dp[0][1] = 0;          // 第0天不持有且可交易
  dp[0][2] = 0;          // 第0天不可能刚卖出

  for (let i = 1; i < n; i++) {
    // 持有: 昨天就持有，或者今天买入（昨天必须不持有且可交易）
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    // 不持有可交易: 昨天就不持有可交易，或者昨天在冷冻期
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][2]);
    // 不持有在冷冻期: 今天刚卖出（昨天必须持有）
    dp[i][2] = dp[i - 1][0] + prices[i];
  }

  // 最大利润是最后一天不持有（无论是否在冷冻期）的最大值
  return Math.max(dp[n - 1][1], dp[n - 1][2]);
};