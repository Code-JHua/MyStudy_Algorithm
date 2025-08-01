var nextGreaterElement = function (nums1, nums2) {
  let res = new Array(nums1.length).fill(-1)
  let map = new Map()
  let stack = []

  for (let i = 0; i < nums2.length; i++) {
    while (nums2[i] > nums2[stack[stack.length - 1]]) {
      const index = stack.pop()
      map.set(nums2[index], nums2[i])
    }
    stack.push(i)
  }

  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) res[i] = map.get(nums1[i])
  }

  return res
};