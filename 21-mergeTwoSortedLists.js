/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let l3 = new ListNode(0);
  let current = l3;

  while(l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1;
      current = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      current = l2;
      l2 = l2.next;
    }
  }

  // l1 !== null ? current.next = l1 : current.next = l2;

  while(l1) {
    current.next = l1;
    current = current.next;
    l1 = l1.next;
  }
  while(l2) {
    current.next = l2;
    current = current.next;
    l2 = l2.next;
  }

  return l3.next;

};




/* cleaner solution */

var mergeTwoLists = function(l1, l2) {
  let l3 = new ListNode(null);
  const current = l3;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      l3.next = l1;
      l1 = l1.next;
    } else {
      l3.next = l2;
      l2 = l2.next;
    }

    l3 = l3.next;
  }

  l3.next = l1 || l2;
  return current.next;
}
