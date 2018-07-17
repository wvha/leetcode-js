/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/*
input: [1, null, 2, 3]
output: [1, 3, 2]

all left nodes before right nodes?

*/

var inorderTraversal = function(root) {
    if (root === null) {
      return [];
    } else {
      return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
    }
};