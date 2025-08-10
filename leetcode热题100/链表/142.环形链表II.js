var detectCycle = function (head) {
  let fast = head
  let slow = head

  while (fast && fast.next) { // 成环 -> 进循环
    fast = fast.next.next
    slow = slow.next
    if (fast == slow) {  // 快慢指针相遇
      let index1 = fast   // 一个指针记录相遇位置
      let index2 = head   // 一个指针从头开始

      while (index1 !== index2) { // 两个指针相遇,则是链表开始入环的第一个节点
        index1 = index1.next
        index2 = index2.next
      }
      return index1
    }
  }
  return null
};