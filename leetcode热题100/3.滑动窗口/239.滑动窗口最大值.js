// 定长滑动窗口

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]} 
 */
var maxSlidingWindow = function (nums, k) {
  let res = []
  let queue = []

  for (let i = 0; i < nums.length; i++) {
    //入
    while (queue.length && nums[queue[queue.length - 1]] < nums[i]) queue.pop()
    queue.push(i)

    //出
    let left = i - k + 1
    if (queue[0] < left) queue.shift()

    //记录答案
    if (left >= 0) res.push(nums[queue[0]])
  }
  return res
}