var longestConsecutive = function(root) {
  if (!root) {
    return 0;
  }

  let count = 0;
  let stack = [[root, 1]];

  while (stack.length > 0) {
    let node;
    let length;
    let current;

    current = stack.pop();
    node = current[0];
    length = current[1];

    count = Math.max(count, length);
    if (node.right) {
      if (node.right.val === node.val + 1) {
        stack.push([node.right, length + 1]);
      } else {
        stack.push([node.right, 1]);
      }
    }
    if (node.left) {
      if (node.left.val === node.val + 1) {
        stack.push([node.left, length + 1]);
      } else {
        stack.push([node.left, 1]);
      }
    }
  }
  return count;
}
