/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    
    while(left < right) {
        let area = (right - left) * Math.min(height[left], height[right]);
        max = Math.max(max, area);
        
        if(height[left] < height[right])
            left = left + 1;
        else
            right = right - 1;
        
    }
    
    return max;
};