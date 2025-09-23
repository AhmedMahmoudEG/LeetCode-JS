/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let closed= {'}':'{',')':'(',']':'['}
    let stack=[]
    for(let char of s){
        if(char=='('||char=='['||char=='{'){
            stack.push(char)
        }else if(stack[stack.length-1] ==closed[char]){
            stack.pop()
        }else stack.push(char)
    }
    return stack.length===0
};