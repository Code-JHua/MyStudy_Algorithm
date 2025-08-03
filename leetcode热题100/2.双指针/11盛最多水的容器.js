var maxArea = function (height) {
  let area = 0
  let res = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    area = (right - left) * Math.min(height[left], height[right])
    res = Math.max(res, area)
    if (height[left] < height[right]) left++
    else right--
  }

  return res
};