/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
// Time Complexity : O(r*c)
// Space Complexity : O(r*c)

var matrixReshape = function(mat, r, c) {
    // If transformation doesn't occur, return mat...
    
    if (mat.length * mat[0].length != r * c) {
        return mat;
    }
    
    // Otherwise create a output matrix and fill the cells...
    
    const output = new Array(r).fill(0).map(() => new Array(c).fill(0));
    
    // Traverse the matrix through the loop... 
    
    for (let idx = 0; idx < r * c; idx++) {
        // idx % c will give us the current column number...
        // idx / c will give us how many rows we have completely filled...
        output[Math.floor(idx/c)][idx % c] = mat[Math.floor(idx / mat[0].length)][idx % mat[0].length];
    }
    
    return output;      // Return the output matrix...
};