/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * Place all odd placed nodes together, then
 *     all even placed nodes
 *
 */


 /********

after we set variables,
we have 4 pointers
we're basically moving the odd nodes forward and skipping all the even nodes
odd nodes end up together, even nodes end up together

 ********/


var oddEvenList = function(head) {
  if (head === null || head.next === null || head.next.next) {
    return head;
  }

  let secondHead = head.next;
  let currentNode = head;
  let secondNode = secondHead;

  while (currentNode !== null && secondNode !== null && secondNode.next !== null) {
    currentNode.next = secondNode.next;
    currentNode = currentNode.next;
    secondNode.next = currentNode.next;
    secondNode = secondNode.next;
  }

  currentNode.next = secondHead;
  return head;
}
