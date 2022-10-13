/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    if(!s.length)
        return true;
    
    s = s.toLowerCase();
    
    let left = 0;
    let right = s.length - 1;
    
    while(left < right) {
        while((left < right) && isNonAplphaNumeric(s[left])) {
            left++
        }
        
        while((left < right) && isNonAplphaNumeric(s[right])) {
            right--;
        }
        
        const isSame = s[left] === s[right]
        
        if(!isSame) return false;
        
        left++;
        right--;
        
    }
    
    return true;
    
     
    
    
function isNonAplphaNumeric (char) {
    
   const isNonAlpha = char < 'a' || 'z' < char;    // a(97) - z(122)
    const isNonNumeric = char < '0' || '9' < char;  // 0(48) - 9(57)

    return isNonAlpha && isNonNumeric;
}    
    

// function toLower (s) {
//     for(let i = 0; i < s.length; i++) {
//          if(s[i] >= 65 && s[i] <= 90)
//             s[i] + 32;
//          else 
//             s[i];
//         }
//     return s;
//     }
};