/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map ={};
    let currentSum = 0;
    let count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        currentSum = currentSum + nums[i];
        
        if(currentSum - k === 0)
            count++;
        
        if(map[currentSum - k] !== undefined)
            count = map[currentSum - k] + count;
        
        if(map[currentSum] !== undefined)
            map[currentSum]++;
        else
            map[currentSum] = 1;
    }
    return count;
};