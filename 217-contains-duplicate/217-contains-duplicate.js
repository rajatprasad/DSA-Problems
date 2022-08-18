
// var containsDuplicate = function(nums) {
//     const map = {};
//     for(let i=0; i < nums.length; i++ ) {
//         if(map[nums[i]] !== undefined) {
//             return true
//         } else {
//             map[nums[i]] = i
//         }
//     }           
//         return false
// };


//Pass the array into a Set() (which removes duplicates) and then compare its size to the original array.

var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
}