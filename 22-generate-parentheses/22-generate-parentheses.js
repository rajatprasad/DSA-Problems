/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    function  helper (res, n, openCount, closeCount, s) {
        // base case
        if(openCount == n && closeCount == n) {
            res.push(s);
            return;
        }
        
        if(openCount < n) {
            helper(res, n, openCount + 1, closeCount, s+"(");
        }
        
        if(closeCount < openCount) {
            helper(res, n, openCount, closeCount + 1, s+")");
        }
    } 
    
    
    let res = [];
    let openCount = 0, closeCount = 0;
    helper(res, n, openCount, closeCount, "");
    return res;
};