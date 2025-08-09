var rotate = function (nums, k) {
  function reverse(a, b) {
    while (a < b) {
      [nums[a], nums[b]] = [nums[b], nums[a]]
      a++
      b--
    }
  }
  k %= nums.length
  reverse(0, nums.length - 1)
  reverse(0, k - 1)
  reverse(k, nums.length - 1)
};