var findLengthOfLCIS = function (nums) {
  let dp = new Array(nums.length + 1).fill(1)
  let res = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) dp[i] = dp[i - 1] + 1
    else dp[i] = 1
    res = Math.max(dp[i], res)
  }

  console.log(dp)
  return res
};