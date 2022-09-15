/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    function helper(n, k) {
        if(n === 1) return 0;
        
        return (helper(n-1, k) + k) % n;
    }
    
    return helper(n, k) + 1;
};