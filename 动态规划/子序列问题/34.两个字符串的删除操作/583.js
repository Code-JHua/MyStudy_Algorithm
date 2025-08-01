var minDistance = function (word1, word2) {
  const [len1, len2] = [word1.length, word2.length];
  // dp[i][j]: word1前i个字符转word2前j个字符的最小操作数
  let dp = new Array(len1 + 1).fill('').map(() => new Array(len2 + 1).fill(0));

  // 边界: 删除所有字符
  for (let i = 0; i <= len1; i++) dp[i][0] = i;
  // 边界: 插入所有字符
  for (let j = 0; j <= len2; j++) dp[0][j] = j;

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1[i - 1] == word2[j - 1]) {
        // 字符相同，无需操作
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 字符不同，取删除、插入的最小值
        // (缺少替换操作: dp[i-1][j-1] + 1)
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1);
      }
    }
  }
  return dp[len1][len2];
};