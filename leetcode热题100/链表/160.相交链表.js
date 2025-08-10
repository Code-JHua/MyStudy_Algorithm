// 链表A长度: x+z
// 链表B长度: y+z
// (x + z) + y = (y + z) + x

var getIntersectionNode = function (headA, headB) {
  let p = headA
  let q = headB

  while (p !== q) {
    p = p ? p.next : headB
    q = q ? q.next : headA
  }

  return p
};