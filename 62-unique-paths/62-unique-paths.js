/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m === 0 || n === 0) return 0;
    if(m === 1 || n === 1) return 1;
    
    // initialise DP with base cases
   let dp = Array(m).fill(0).map(() => Array(n).fill(1));
    
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    // return value for bottom right
    return dp[m-1][n-1];
};

// var uniquePaths = function(m, n) {
//     if( m == 1 || n == 1) {
//         return 1;
//     }    
    
//     return uniquePaths(m-1, n) + uniquePaths(m, n-1);
// }