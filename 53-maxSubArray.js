var maxSubArray = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
  }

  return Math.max(...nums);
}

let input = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(input)); // 6
console.log(maxSubArray([1,3,5])); // 9 

/*
***********************
In this problem we're comparing the current number with the previous numbers' sums
whichever is greater will be set as the new current sum
return the newest sum at end
***********************
*/