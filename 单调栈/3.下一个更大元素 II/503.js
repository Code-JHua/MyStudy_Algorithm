var nextGreaterElements = function (nums) {
  let res = new Array(nums.length).fill(-1)
  let stack = []

  for (let i = 0; i < nums.length * 2; i++) {
    while (stack.length !== 0 && nums[i % nums.length] > nums[stack[stack.length - 1]]) {
      const index = stack.pop()
      res[index] = nums[i % nums.length]
    }
    stack.push(i % nums.length)
  }
  return res
};