/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
      var map = {};
  for (var i = 0; i < nums.length; i++) {
    var compliment = target - nums[i];
    if (map[compliment] !== undefined) {
      return [map[compliment], i]
    } else {
      map[nums[i]] = i;
    }
  }
};