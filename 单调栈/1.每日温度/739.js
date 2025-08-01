var dailyTemperatures = function (temperatures) {
  const len = temperatures.length
  const stack = []
  const arr = new Array(len).fill(0)

  for (let i = 0; i < len; i++) {
    while (stack.length !== 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      arr[stack[stack.length - 1]] = i - stack[stack.length - 1]
      stack.pop()
    }
    stack.push(i)
  }
  return arr
};