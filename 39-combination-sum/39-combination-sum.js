/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    
    function solve(i, curr, total) {
        //base case
        if(total === target){
            res.push(curr.slice());
            return;
        }
        
        if(i >= candidates.length || total > target)
            return;
        
        //include
        curr.push(candidates[i]);
        solve(i, curr, total + candidates[i]);
        
        //exclude
        curr.pop();
        solve(i+1, curr, total);
    }
    
    solve(0, [], 0);
    return res;
};