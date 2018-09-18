const pruneTree = function(root) {
  if (!root) return null;

  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);

  let leaf = !root.left && !root.right;
  if (leaf && root.val !== 1) {
    return null;
  }

  return root;
}
