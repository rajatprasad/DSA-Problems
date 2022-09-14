/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function(nums) {
    let tSum = 0, leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    tSum += nums[i];
  }

  for (let j = 0; j < nums.length; j++) {
    if (leftSum === tSum - leftSum - nums[j]) {
      return j;
    } else {
      leftSum += nums[j];
    }
  }
  return -1;
};