// 滑动窗口

/**
 * 计算字符串中不包含重复字符的最长子串的长度
 * 使用滑动窗口（双指针）算法
 * 
 * @param {string} s - 输入的字符串
 * @return {number} - 最长无重复字符子串的长度
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0; // 记录最长子串的长度
  let left = 0; // 滑动窗口的左指针，指向窗口的起始位置
  const cnt = new Map(); // 哈希表，用于记录当前窗口内每个字符出现的次数

  // 右指针 right 从 0 开始遍历整个字符串
  for (let right = 0; right < s.length; right++) {
    const c = s[right]; // 当前遍历到的字符
    // 将当前字符 c 加入窗口，其出现次数加 1
    // 如果 c 之前未出现过，使用 ?? 0 提供默认值 0
    cnt.set(c, (cnt.get(c) ?? 0) + 1);

    // 当窗口内出现重复字符（即字符 c 的出现次数大于 1）时，需要缩小窗口
    while (cnt.get(c) > 1) {
      // 从窗口左侧移除字符 s[left]，将其出现次数减 1
      cnt.set(s[left], cnt.get(s[left]) - 1);
      left++; // 左指针右移，缩小窗口
    }

    // 此时窗口 [left, right] 内无重复字符
    // 更新最长子串长度 ans，取当前长度 (right - left + 1) 和之前最大值中的较大者
    ans = Math.max(ans, right - left + 1);
  }

  return ans; // 返回最长无重复字符子串的长度
};