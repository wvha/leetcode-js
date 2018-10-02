/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


var reverseList = function(head) {
  let prev = null;

  while (head !== null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
};



function reverseListRecursive(head) {
  if (!head || !head.next) {
    return head;
  }

  let newHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}


// iterative version
// set nextTemp to head.next
// set head.next to null --> previous head
// set head to nextTemp .. (actual next)