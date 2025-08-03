// 单调栈解法

var trap = function (height) {
  let stack = []; // 存储索引，单调递减栈
  let res = 0;

  for (let i = 0; i < height.length; i++) {
    // 当前柱子更高，可以形成凹槽
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      let middleIndex = stack.pop(); // 底部

      if (stack.length === 0) break; // 没有左边界

      let leftIndex = stack[stack.length - 1]; // 左边界
      let rightIndex = i; // 右边界

      let h = Math.min(height[leftIndex], height[rightIndex]) - height[middleIndex];
      let w = rightIndex - leftIndex - 1;

      res += h * w;
    }
    stack.push(i);
  }

  return res;
};