const findUnsortedSubarray = function(nums) {
  let max = -Infinity, min = Infinity, startIndex = -1, endIndex = -2;
  
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
    if (nums[i] < max) {
      endIndex = i;
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    min = Math.min(min, nums[i]);
    if (nums[i] > min) {
      startIndex = i;
    }
  }

  return endIndex - startIndex + 1;
}

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])); // 5

console.log(findUnsortedSubarray([1,5,2])); // 2