/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

// check if trees are/not null
// with new tree, set as t1+t2
// for some reason, can't do t3

var mergeTrees = function(t1, t2) {
    if (!t1) {
        return t2;
    }
    if (!t2) {
        return t1;
    }

    t1.val += t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);

    return t1;
};
