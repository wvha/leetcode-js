/**
 * @param {number[]} nums
 * @return {number}

works only for sorted arrays
its n/2 ?

 */

var singleNonDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i+=2) {
        if (nums[i] !== nums[i+1]) {
            return nums[i];
        }
    }
};