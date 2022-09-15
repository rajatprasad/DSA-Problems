/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    let res = [];
    let combination = "";
    let index = 0;
    let mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    
    if(digits.length == 0) return res;
    
    helper(digits, index, combination, mapping, res);
    return res;
};

 function helper(digits, index, combination, mapping, res) {
        if(index >= digits.length) {
            res.push(combination);
            return;
        }
        
        let num = Number(digits[index]);
        let value = mapping[num];
        
        for(let i = 0; i < value.length; i++) {
            let temp =  combination + value[i];              
            helper(digits, index + 1, temp, mapping, res);   
           temp = temp.slice(0, -1);
        }
    }