/**
 * @param {number[]} nums
 * @return {number[]}



 */



var findDisappearedNumbers = function(nums) {
  const obj = new Map();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    obj.set(nums[i], i);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!obj.has(i)) {
      result.push(i);
    }
  }
  return result;
};


var findDisappearedNumbers = function(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i] - 1;
    if (nums[val] > 0) {
      nums[val] = -nums[val];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i+1);
    }
  }
  return result;
}