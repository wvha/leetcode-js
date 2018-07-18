/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}

 input is array
 time complexity: O(n^2) .. average case is O(nlogn)
 space complexity: O(n)

 */
var constructMaximumBinaryTree = function(nums) {
    // find max, this is val
    // split by that number
    // find max again, this is the left/right child
    let max = Math.max(...nums);
    let maxIndex = nums.indexOf(max);

    let tree = new TreeNode(max);
    let leftSide = nums.slice(0, maxIndex);
    let rightSide = nums.slice(maxIndex + 1, nums.length);

    if(leftSide.length > 0) {
      tree.left = constructMaximumBinaryTree(leftSide);
    }

    if(rightSide.length > 0) {
      tree.right = constructMaximumBinaryTree(rightSide);
    }

    return tree;
};

