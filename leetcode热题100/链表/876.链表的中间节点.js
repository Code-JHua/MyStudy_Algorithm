// 快慢指针
// 快指针一次走两步，慢指针一次走一步
// 当快指针走到头的时候，慢指针刚好走到中间

var middleNode = function (head) {
  let fast = head
  let slow = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
};