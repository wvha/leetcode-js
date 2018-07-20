/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


// if i is odd, it should be greater
// if i is even, it should be smaller than the next number
// both have to be true or both are false
// if place is even, and number is greater than previous, must switch
// if place is odd, and number is smaller than previous, must switch
// use the === for the false && false to be true

var wiggleSort = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (i%2 === 0 === nums[i] > nums[i-1]) {
            [nums[i], nums[i-1]] = [nums[i-1], nums[i]];
        }
    }
};

