/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    let index = 0;
    helper(nums, index, res);
    return res;
};

function helper (nums, index, res) {
    if(index >= nums.length) {
        res.push(nums.slice());
        return;
    }
    
    for(let i = index; i < nums.length; i++) {
        [nums[index], nums[i]] = [nums[i], nums[index]];
        helper(nums, index + 1, res);
        [nums[index], nums[i]] = [nums[i], nums[index]];
    }
}

