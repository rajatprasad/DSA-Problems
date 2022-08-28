/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

class MinStack {
    
    constructor() {
        this.storage = [];
        this.min = [] ;
    }
    
    push(val) {
        if(this.min.length === 0) {
            this.min.push(val)
        } else {
            this.min.push(Math.min(this.min[this.min.length - 1], val));
        }
        
        this.storage.push(val);
    }
    
    pop() {
        
        if(this.storage.length !== 0) {
            
            this.min.pop();
            this.storage.pop()
        }  
    }
    
    top() {
        return this.storage[this.storage.length - 1];
    }
    
    getMin() {
        return this.min[this.min.length - 1];
    }
}










