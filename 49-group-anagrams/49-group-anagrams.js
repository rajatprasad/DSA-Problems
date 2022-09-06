/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    
    for(let i = 0; i < strs.length; i++) {
        let letters = strs[i].split("").sort().join("");
        map[letters] ? map[letters].push(strs[i]) : map[letters] = [strs[i]];
    }
    
    return Object.values(map);
};