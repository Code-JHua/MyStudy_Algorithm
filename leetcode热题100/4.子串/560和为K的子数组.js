// 前缀和 + 哈希表

var subarraySum = function (nums, k) {
  let s = new Array(nums.length + 1)
  s[0] = 0
  let res = 0
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    s[i + 1] = s[i] + nums[i]
  }

  for (let x of s) {
    res += map.get(x - k) ?? 0
    map.set(x, (map.get(x) ?? 0) + 1)
  }
  return res
};