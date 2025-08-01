var isSubsequence = function (s, t) {
  const [lenS, lenT] = [s.length, t.length]
  let dp = new Array(lenS + 1).fill('').map(() => new Array(lenT + 1).fill(0))

  for (let i = 1; i <= lenS; i++) {
    for (let j = 1; j <= lenT; j++) {
      if (s[i - 1] == t[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }

  return lenS == dp[lenS][lenT] ? true : false
};