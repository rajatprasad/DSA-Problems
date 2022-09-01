/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let i = s.length - 1;
    let ans = "";
    
    while(i >= 0) {
        while(i >= 0 && s.charAt(i) === " " ) {
            i--;
        }
        
        let j = i;
        
        if(i < 0) break;
        
        while(i >= 0 && s.charAt(i) !== " ") {
            i--;
        }
        
        if(ans.length === 0) {
            ans = ans.concat(s.substring(i+1, j+1));
        } else {
            ans = ans.concat(" ", s.substring(i+1, j+1));
        }
    }
    return ans;
};