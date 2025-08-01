var numDistinct = function (s, t) {
  const [lens, lent] = [s.length, t.length]
  let dp = new Array(lens + 1).fill('').map(() => new Array(lent + 1).fill(0))

  for (let i = 0; i <= lens; i++) {
    dp[i][0] = 1
  }

  for (let i = 1; i <= lens; i++) {
    for (let j = 1; j <= lent; j++) {
      if (s[i - 1] == t[j - 1]) dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
      else dp[i][j] = dp[i - 1][j]
    }
  }

  return dp[lens][lent]
};