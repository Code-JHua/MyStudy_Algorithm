var groupAnagrams = function (strs) {
  let map = new Map()
  for (let i = 0; i < strs.length; i++) {
    let s = strs[i].split('').sort().join('')
    if (map.has(s)) {
      map.get(s).push(strs[i])
    } else {
      map.set(s, [strs[i]])
    }
  }
  return Array.from(map.values())
};