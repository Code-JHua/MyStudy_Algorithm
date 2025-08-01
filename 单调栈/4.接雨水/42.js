var trap = function (height) {
  let stack = [];
  let totalWater = 0;
  const n = height.length;

  for (let i = 0; i < n; i++) {
    // 当前柱子比栈顶高，说明可能形成了凹槽
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      let middleIndex = stack.pop(); // 底部索引（凹槽）

      if (stack.length === 0) break; // 没有左边界，无法接水

      let leftIndex = stack[stack.length - 1]; // 左边界
      let h = Math.min(height[leftIndex], height[i]) - height[middleIndex];
      let w = i - leftIndex - 1;

      totalWater += h * w;
    }
    stack.push(i);
  }

  return totalWater;
};