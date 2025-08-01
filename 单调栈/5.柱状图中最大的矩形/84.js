var largestRectangleArea = function (heights) {
  let res = 0
  let stack = []
  heights = [0, ...heights, 0] // 首尾添加0，避免处理边界问题

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      let middleIndex = stack.pop()
      let h = heights[middleIndex]
      let w = i - stack[stack.length - 1] - 1
      res = Math.max(res, h * w)
    }
    stack.push(i)
  }
  return res
};