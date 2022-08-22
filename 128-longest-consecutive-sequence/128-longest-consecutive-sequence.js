/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
//  CHECK FOR LENGTH OF ARRAY
    let len = nums.length;
    if(!len) {
        return 0;
    }
    
//  PUT THE ARRAY IN SET
    const set = new Set(nums);
    let max = 0;
     
    for(let i = 0; i < nums.length; i++) {
        
//  IF PREV NUM IS PRESENT IN THE SET THEN ITS NOT A NEW SEQUENCE        
        if(set.has(nums[i] - 1))
            continue;
        
//  CHECK IF THE NEXT NUM IS PRESENT IN THE SET OR NOT
        let currMax = 1;
        while(set.has(nums[i] + currMax)) {
            currMax++;
        }
        
        max = Math.max(currMax, max);
        
//  IF MAX IS GREATER THAN LENGTH / 2 IT MEANS ITS THE LONGEST SEQUENCE
        if(max > len/2)
            break;
    }
    return max;
};