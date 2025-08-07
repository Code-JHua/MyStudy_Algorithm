/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let res = []
  let arrS = new Array(26).fill(0)
  let arrP = new Array(26).fill(0)

  for (let i = 0; i < p.length; i++) {
    arrP[p.charCodeAt(i) - 'a'.charCodeAt(0)]++
  }

  for (let i = 0; i < s.length; i++) {
    arrS[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
    let left = i - p.length + 1
    if (left < 0) continue

    if (_.isEqual(arrP, arrS)) {
      res.push(left)
    }

    arrS[s.charCodeAt(left) - 'a'.charCodeAt(0)]--
  }
  return res
};