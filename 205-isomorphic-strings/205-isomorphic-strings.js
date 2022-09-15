var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false
    
    let sMap =  new Map(), tMap = new Map()
    
    for(let i = 0; i < s.length; i++) {
        if(sMap.has(s[i])) {
            let val = sMap.get(s[i])
            
            if(t[i] !== val) return false
        }
        else if(tMap.has(t[i])) {
			return false
        }
        else {
             sMap.set(s[i], t[i])
             tMap.set(t[i], s[i])
        }
       
    }
    
    return true
};