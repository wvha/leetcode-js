var minDepth = function(root) {
  if (root === null) {
    return 0;
  }

  if (root.left === null) {
    return 1 + minDepth(root.right);
  }

  if (root.right === null) {
    return 1 + minDepth(root.left);
  }

  return Math.min(1 + minDepth(root.right), 1 + minDepth(root.left));
}
