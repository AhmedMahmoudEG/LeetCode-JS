/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack =[]
    let map = {')':'(',']':'[','}':'{'}
    for(let ch of s){
        //"()[]{}"  ---> ()
        // ->
        if(!map[ch]) stack.push(ch)
        else if(map[ch]==stack[stack.length-1]){
       // console.log(map[ch])
            stack.pop()
        } else return false
       // stack.push(ch)
    }

    return stack.length ==0
};