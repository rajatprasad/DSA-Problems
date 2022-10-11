/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let count = {};
    let result = 0
    let l = 0, maxF = 0;    //maxFrequency
    
    for(let r = 0; r < s.length; r++ ) {
      
        count[s[r]] = count[s[r]] ? count[s[r]] + 1 : 1;
        maxF = Math.max(maxF, count[s[r]]);
        
        while(r - l + 1 - maxF > k) {
            count[s[l]]--;
            l++;
        }
        result = Math.max(result, (r - l + 1))
    }
    return result;
};

