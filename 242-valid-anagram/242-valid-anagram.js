/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }
    
//     let sMap = {};
//     let tMap = {};
    
//     for (let i = 0; i < s.length; i++) {
//         if (sMap[s[i]] !== undefined) {
//             sMap[s[i]]++;
//         } else {
//             sMap[s[i]] = 1;
//         }
        
//         if (tMap[t[i]] !== undefined) {
//             tMap[t[i]]++;
//         } else {
//             tMap[t[i]] = 1;
//         }
//     }
    
//     for (let k in sMap) {
//         if (sMap[k] !== tMap[k])
//             return false;
//         }
        
//     return true;
// };

var isAnagram = function(s, t) {
    if(s.length !== t.length)
        return false;
    
    let map = {};
    
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]])
            map[s[i]]++;
        else
            map[s[i]] = 1;
    }
    
    for(i = 0; i < t.length; i++) {
        if(map[t[i]])
           map[t[i]]--;
        else
            return false;
    }
    
    return true;
}





















