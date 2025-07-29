/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = new Array(nums.length).fill(0)

  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < nums.length; i++) { // 从第三间房子开始
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }
  console.log(dp)
  return dp[nums.length - 1]
};