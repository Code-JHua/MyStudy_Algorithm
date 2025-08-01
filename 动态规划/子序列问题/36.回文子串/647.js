var countSubstrings = function (s) {
  let dp = new Array(s.length).fill('').map(() => new Array(s.length).fill(false))
  let res = 0

  for (let i = s.length - 1; i >= 0; i--) {  // 注意遍历顺序
    for (let j = i; j < s.length; j++) {
      if (s[i] == s[j]) {
        if (j - i <= 1) {
          dp[i][j] = true
          res++
        } else if (dp[i + 1][j - 1]) {
          dp[i][j] = true
          res++
        }
      }
    }
  }
  console.log(dp)
  return res
};