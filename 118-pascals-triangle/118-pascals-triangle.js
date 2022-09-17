/**
 * @param {number} numRows
 * @return {number[][]}
 */
// var generate = function(numRows) {
//     let result = [[1]];
    
//     for(let i = 0; i < numRows - 1; i++) {
//         let temp = [0] + result[i -1] + [0];
//         let row = [];
        
//         for(let j = 0; j < result[i -1].length; j++) {
//             row.push(temp[j] + temp[j + 1]);
//         }
//         result.push(row);
//     }
//     return result;
// };

var generate = function(numRows) {
    let result = [];
    
    for(let i =0; i< numRows; i++) {
        let row = [];
        row[0] = 1;
        row[i] = 1;
        
        for(let j = 1; j < row.length - 1; j++) {
            let rowAbove = result[i-1];
            row[j] = rowAbove[j] + rowAbove[j-1];
        }
        result[i] = row;
    }
    return result;
}












