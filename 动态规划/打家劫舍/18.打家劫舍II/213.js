// 把环 拆成 两个 线性的 数组
var rob = function (nums) {

  const fun = (start, end) => {
    let dp = new Array(end - start + 1).fill(0)
    dp[start] = nums[start]
    dp[start + 1] = Math.max(nums[start], nums[start + 1])
    for (let i = start + 2; i <= end; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[end]
  }

  if (nums.length === 1) return nums[0]

  const isLeft = fun(0, nums.length - 2)
  const isRight = fun(1, nums.length - 1)

  return Math.max(isLeft, isRight)

};