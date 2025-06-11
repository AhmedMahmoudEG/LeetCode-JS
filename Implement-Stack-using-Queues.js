
var MyStack = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x)
    for(let i =0;i<this.queue.length-1;i++){
        let temp = this.queue.shift();
        this.queue.push(temp);
    }

};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
   return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(this.queue.length===0){
        return true
    }
    return false
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */