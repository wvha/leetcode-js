/*

in this problem write function to delete node in linked list
given only access to that node

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */


var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
