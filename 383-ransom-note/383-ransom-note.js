/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    if(magazine.length < ransomNote.length)
        return false;
    
    let map = {};
    
    for(let i = 0; i < magazine.length; i++) {
        if(map[magazine[i]])
            map[magazine[i]]++
        else
            map[magazine[i]] = 1;
    }
    
    for(let j = 0; j < ransomNote.length; j++) {
        if(map[ransomNote[j]])
            map[ransomNote[j]]--
        else
            return false;
    }
    
    return true;
};