/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

/*
use recursive function,
  pass in node and level
  for each node, check if there's a spot already in array for that level
  this is breadth first


*/
var levelOrder = function(root) {
  const array = [];
  function recursive(node, level) {
    if (!node) {
      return;
    } else if (array.length <= level) {
      array.push([]);
    }
    array[level].push(node.val);
    recursive(node.left, level+1);
    recursive(node.right, level+1);
  }
  recursive(root, 0);
  return array;

};