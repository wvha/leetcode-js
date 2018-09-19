var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === difference) {
        return [i, j];
      }
    }
  }

}



var twoSum2 = function(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]] !== undefined) {
      return [obj[target - nums[i]], i];
    }
    obj[nums[i]] = i;
  }
}
