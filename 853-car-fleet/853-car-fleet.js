/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    
    const combined = position.map( (item, index) => {
        return [item, speed[index]];
    }).sort((a,b) => a[0] - b[0]);
    
    let stack = [];
    
    for(let i = combined.length - 1; i >= 0 ; i--) {
        
        const p = combined[i][0];
        const s = combined[i][1];
        
        stack.push((target - p) / s)
        
        if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop();
        }
    }
    
    return stack.length;
};