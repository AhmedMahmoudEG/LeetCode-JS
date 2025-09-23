/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let arr =['+','-','*','/']
    let stack=[]
    let a,b
    for(let t of tokens)
    {
        if(t=='+'){
            stack.push(Number(stack.pop())+Number(stack.pop()))
        }else if(t=='-'){
            let a = Number(stack.pop())
            let b = Number(stack.pop())
            stack.push(b-a)
        }else if(t=='*'){
            stack.push(Number(stack.pop())*Number(stack.pop()))
        }else if(t=='/'){
            let a = Number(stack.pop())
            let b = Number(stack.pop())
            stack.push(Math.trunc(b/a))
        }else{
            stack.push(Number(t))
        }
    }
    return stack[0]
};