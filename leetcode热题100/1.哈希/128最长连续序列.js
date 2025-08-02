var longestConsecutive = function (nums) {
  let set = new Set(nums) // nums去重
  let res = 0

  for (let x of set) {
    if (set.has(x - 1)) continue

    let y = x + 1
    while (set.has(y)) {
      y++
    }

    res = Math.max(res, y - x)
  }
  return res
};