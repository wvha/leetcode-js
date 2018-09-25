/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

var searchBST = function(root, val) {


  if (root.val === val) {
    return root;
  }
  if (root.val < val && root.right !== null) {
    searchBST(root.right, val);
  }
  if (root.val > val && root.left !== null) {
    searchBST(root.left, val);
  }
  return [];
};

