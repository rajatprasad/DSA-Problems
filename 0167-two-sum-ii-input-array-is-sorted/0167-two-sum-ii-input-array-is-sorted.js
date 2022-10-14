/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;
    
    while(left < right) {
        let current = numbers[left] + numbers[right];
        
        if(current > target)
            right = right - 1;
        else if(current < target)
            left = left + 1;
        else
            return [left + 1, right + 1];
    }
    return [];
};


