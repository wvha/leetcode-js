/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

 /*
output is an array with leaf value sequence
input is 2 trees

constraints
e??

recurse until there's no children nodes
remember, left to right
when you reach a leaf, push to array
do the same for root 2
if two ttrees the same, then return true


 */

var leafSimilar = function(root1, root2) {
  let tree1 = [];
  let tree2 = [];

  function search(node, array) {
    if (!node.left && !node.right) {
      array.push(node.val);
    }

    if (node.left) {
      search(node.left, array);
    }
    if (node.right) {
      search(node.right, array);
    }
  }

  search(root1, tree1);
  search (root2, tree2);
  return JSON.stringify(tree1) === JSON.stringify(tree2);
};
