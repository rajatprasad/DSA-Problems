/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    
// having the numbers in ascending order will make this problem much easier.
// also, knowing the overall problem  will take at least O(N^2) time, we can
// afford the O(NlogN) sort operation
    
    nums.sort((a,b) => a - b);
    

    for(let i = 0; i < nums.length; i++) {
        
        // once this number hits 0, there's no need to go further since
		// positive numbers cannot sum to a negative number (optional)
		if (nums[i] > 0) break
        
        // we don't want repeats, so skip numbers we've already seen
        if(nums[i] === nums[i - 1])
            continue
        
        let left = i + 1, right = nums.length - 1;
        
        while(left < right) {
            let threeSum = nums[i] + nums[left] + nums[right];
            
            if(threeSum > 0)
                right = right - 1;
            else if(threeSum < 0)
                left = left + 1;
            else {
                res.push([nums[i], nums[left], nums[right]]);
                left = left + 1;
                while(nums[left] === nums[left - 1] && left < right){
                    left = left + 1;
                }
            }
        }
    }
    return res;
};