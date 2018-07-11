/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] === undefined) {
            obj[nums[i]] = nums[i];
        } else {
            delete obj[nums[i]];
        }
    }

    return Number(Object.keys(obj)[0]);
};


// for some reason
// if (!obj[nums[i]]) doesnt work but
// if (obj[nums[i]] === undefined) works.
// also
// obj.hasOwnProperty(nums[i])

