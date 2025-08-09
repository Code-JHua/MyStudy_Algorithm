// 贪心算法

var merge = function (intervals) {
  let res = []
  // 贪心, 合并区间 需要先排序
  intervals.sort((a, b) => a[0] - b[0])

  let pre = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    cur = intervals[i]
    if (cur[0] > pre[1]) { // 上一个的右区间 < 当前的左区间 -> 不重合
      res.push(pre)
      pre = cur
    } else {
      pre[1] = Math.max(cur[1], pre[1])
    }
  }
  res.push(pre) // 合并的最后一个区间需要记录
  return res

};