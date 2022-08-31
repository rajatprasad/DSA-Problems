/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    
    for(let i = 0; i < tokens.length; i++) {
        
        if(tokens[i] === '+') {
            stack.push(stack.pop() + stack.pop());
        } else if(tokens[i] === '-' ) {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(b - a);
        } else if (tokens[i] === '*') {
            stack.push(stack.pop() * stack.pop());
        } else if(tokens[i] === '/') {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(Math.trunc(b / a));
        } else {
            stack.push(Number(tokens[i]));
        }
    }
    return stack[0];
};