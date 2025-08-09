// 前缀和 和 后缀和 相乘

// 前缀和：当前元素之前的所有元素的乘积
// 后缀和：当前元素之后的所有元素的乘积
// 前缀和 和 后缀和 相乘 就是 除了当前元素以外的其他元素的乘积

var productExceptSelf = function (nums) {
  let preArr = new Array(nums.length)
  preArr[0] = 1
  for (let i = 1; i < nums.length; i++) {
    preArr[i] = preArr[i - 1] * nums[i - 1]
  }

  let sufArr = new Array(nums.length)
  sufArr[nums.length - 1] = 1
  for (let i = nums.length - 2; i >= 0; i--) {
    sufArr[i] = sufArr[i + 1] * nums[i + 1]
  }

  let res = new Array(nums.length)
  for (let i = 0; i < nums.length; i++) {
    res[i] = preArr[i] * sufArr[i]
  }

  return res
};