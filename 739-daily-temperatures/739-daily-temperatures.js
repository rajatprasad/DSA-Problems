/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    let stack = [];
    let res = [];
    
    for(let i = temperatures.length - 1; i >= 0; i-- ) {
        
        let top = stack[stack.length - 1];
        
        while(stack.length !== 0 && temperatures[top] <= temperatures[i]) {
            stack.pop();
            top = stack[stack.length - 1];
        }
        
        if(!stack.length)
            res.push(0);
        else
            res.push(top - i);
        
        stack.push(i);
    }
    
    return res.reverse();
};