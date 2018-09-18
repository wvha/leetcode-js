// simple way. recursive

var invertTree = function(root) {
  if (root) {
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  }
  return root;
}

// using a queue and breadth first

var invertTree2 = function(root) {
  if (root === null) {
    return null;
  }

  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let current = queue.shift();
    let temp = current.left;
    current.left = current.right;
    current.right = temp;

    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  return root;
}
