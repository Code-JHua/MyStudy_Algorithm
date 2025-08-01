// 和最长公共子序列的代码是一样的
var maxUncrossedLines = function (nums1, nums2) {
  const [len1, len2] = [nums1.length, nums2.length]
  let dp = new Array(len1 + 1).fill('').map(() => new Array(len2 + 1).fill(0))

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (nums1[i - 1] == nums2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }
  console.log(dp)

  return dp[len1][len2]
};