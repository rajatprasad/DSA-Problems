/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowZero = false;
    
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
            if(matrix[row][col] === 0) {
                matrix[0][col] = 0;
                
                if(row > 0)
                    matrix[row][0] = 0;
                else
                    rowZero = true;
            }
        }
    }
    
    for(let row = 1; row < matrix.length; row++) {
        for(let col = 1; col < matrix[0].length; col++) {
            if(matrix[row][0] === 0 || matrix[0][col] === 0) {
                matrix[row][col] = 0;
            }
        }
    }
    
    if(matrix[0][0] === 0) {
        for(let row = 0; row < matrix.length; row++) {
            matrix[row][0] = 0;
        }
    }
    
    if(rowZero) {
        for(let col = 0; col < matrix[0].length; col++) {
            matrix[0][col] = 0;
        }
    }
    
};