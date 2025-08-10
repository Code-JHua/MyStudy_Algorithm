var isPalindrome = function (head) {
  // 找中间节点
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  // 翻转中间以及之后的节点
  let list = null
  while (slow) {
    let nextNode = slow.next
    slow.next = list
    list = slow
    slow = nextNode
  }

  // 判断回文
  let cur = head
  while (list) {
    if (cur.val !== list.val) return false
    cur = cur.next
    list = list.next
  }
  return true
};