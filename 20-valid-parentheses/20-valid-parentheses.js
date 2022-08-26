/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
// If size is odd its not balanced
    if(s.length % 2 !== 0) 
        return false;
    
    let stack = [];
    let map = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]]) {
            stack.push(map[s[i]]);
        } else if(s[i] !== stack.pop()) {
            return false;
        }
    }
    return !stack.length;  // at the end return whether stack is empty or not
};