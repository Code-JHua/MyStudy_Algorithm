var reverseList = function (head) {
  let list = null
  let cur = head

  while (cur) {
    let nextNode = cur.next // 先把当前节点的下一个节点保存起来
    cur.next = list // 把当前节点的下一个节点指向新的链表
    list = cur // 新的链表指向当前节点
    cur = nextNode // 当前节点指向下一个节点
  }
  return list
};