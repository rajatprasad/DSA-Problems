/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
   let res = [];
    let subset = [];
    nums = nums.sort((a,b) => a-b);
    
    function solve(i) {
        if(i >= nums.length) {
            res.push(subset.slice());
            return;            
        }
        
        // include
        subset.push(nums[i]);
        solve(i+1);
        subset.pop();
        
        //exclude
        while(i+1 < nums.length && nums[i] == nums[i+1]) {
            i = i + 1;
        }
        solve(i+1);
        
    }
    
    solve(0);
    return res; 
};