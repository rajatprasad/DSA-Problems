/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    let subset = [];
    let res = [];
    let index = 0;
    
    helper(nums, index, subset);
    return res;
 
    
    function helper(nums, index, subset) {
        // base case
        if(index == nums.length) {
            res.push(subset);
            return;
        }
        
        // exclude
        helper(nums, index+1, subset);
        
        // include
        helper(nums, index+1, [...subset, nums[index]]);
    }
    
};