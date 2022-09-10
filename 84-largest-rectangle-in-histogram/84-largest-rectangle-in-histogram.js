/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let largestArea = 0;
    let stack = [];
    
    for(let i = 0; i < heights.length; i++) {
        
        let start = i;
        
        while(stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
            // let [lastI, lastH] = stack.pop();

            let pop = stack.pop();
            let lastI = pop[0];
            let lastH = pop[1];
            
            largestArea = Math.max(largestArea, lastH * (i - lastI));
            start = lastI;
        }
        
        stack.push([start, heights[i]]);
    }
    
    for (let j = 0; j < stack.length; j++) {
        let currArea = stack[j][1] * (heights.length - stack[j][0]);
        largestArea = Math.max(largestArea, currArea);
    }

    return largestArea;
    
};