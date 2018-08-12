// have two pointers
// one at beg one at end

var maxArea = function(height) {
  let right = height.length - 1;
  let result = 0;
  let left = 0;
  let current;

  while (left < right) {
    current = Math.min(height[left], height[right]) * (right-left);

    if (current > result) {
      result = current;
    }

    if (height[left] <= height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  } return result;
}
