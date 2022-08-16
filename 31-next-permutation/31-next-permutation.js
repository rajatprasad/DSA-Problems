/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length === 1) 
        return;
    
    let idx1 ;
            let idx2 = 0;

    for(let i = nums.length - 2; i >= 0; i--) {
        if(nums[i] < nums[i + 1]) {
            idx1 = i;
            break;
        }
    }
    
    if(idx1 === undefined) {
        // nums.sort((a,b) => a - b);
        return nums.reverse();
    } else {
        for(let j =  nums.length - 1; j >=0; j--) {
            if(nums[j] > nums[idx1]){
                idx2 = j;
                break;
            }
        }
    }
    
//  SWAP idx1 and idx2
    [nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]]
    
//  SORT THE REST OF Numbers
   let left = idx1 + 1, right = nums.length -1;
    while(left<right){
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
    
};