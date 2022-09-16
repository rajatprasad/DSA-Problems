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
        res.push([...nums]);
        return;
    }
    
    for(let i = index; i < nums.length; i++) {
        // swap(nums[index], nums[i]);
        [nums[index], nums[i]] = [nums[i], nums[index]];
        helper(nums, index + 1, res);
        // swap(nums[index], nums[i]);
        [nums[index], nums[i]] = [nums[i], nums[index]];

    }
}

// function swap(num1, num2) {
//     let temp = num1;
//     num1 = num2;
//     num2 = temp;
    
//     return [num1, num2];
// }

