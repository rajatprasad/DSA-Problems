/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

class Node {
    constructor() {
        this.children = {},
        this.isWord = false
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }
    
    insert(word) {
        let curr = this.root;
        
        for(let i = 0; i < word.length; i++) {
            let charToInsert = word[i];
            
            if(curr.children[charToInsert] === undefined)
                curr.children[charToInsert] = new Node();
            
            curr = curr.children[charToInsert];
        }
        
        curr.isWord = true;
    }
    
    search(word) {
        let curr = this.root;
        
        for(let i = 0; i < word.length; i++) {
            let charToSearch = word[i];
            
            if(curr.children[charToSearch] === undefined)
                return false;
            
            curr = curr.children[charToSearch];
        }
        
        return curr.isWord;
    }
    
    startsWith(prefix) {
        let curr = this.root;
        
        for(let i = 0; i < prefix.length; i++) {
            let charToFind = prefix[i];
            
            if(curr.children[charToFind] === undefined)
                return false;
            
            curr = curr.children[charToFind];
        }
        
        return true;
    }
}



















