/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [];
    candidates = candidates.sort((a,b) => a-b);
    
    function solve(pos, curr, target) {
        if(target == 0) {
            res.push(curr.slice());
            // return;
        }
        
        if(target <= 0)
            return;
        
        let prev = -1;
        for( let i = pos; i < candidates.length; i++) {
            if(candidates[i] == prev)
                continue;
            
            curr.push(candidates[i]);
            solve(i+1, curr, target - candidates[i]);
            curr.pop();
            prev = candidates[i];
        }
    }
    
    solve(0, [], target);
    return res;
};