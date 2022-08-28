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
        this.storage = {};
        this.size = 0;
        this.min = [] ;
    }
    
    push(val) {
        if(this.min.length === 0) {
            this.min.push(val)
        } else {
            this.min.push(Math.min(this.min[this.min.length - 1], val));
        }
        
        this.size++;
        this.storage[this.size] = val;
    }
    
    pop() {
        
        if(this.storage.length !== 0) {
            
            this.min.pop();
        
            let removed = this.storage[this.size];
            delete this.storage[this.size];
            this.size--;
            return removed;
        }  
    }
    
    top() {
        return this.storage[this.size];
    }
    
    getMin() {
        return this.min[this.min.length - 1];
    }
}










