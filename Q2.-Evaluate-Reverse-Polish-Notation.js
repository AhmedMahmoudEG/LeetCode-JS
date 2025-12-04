1/**
2 * @param {string[]} tokens
3 * @return {number}
4 */
5var evalRPN = function(tokens) {
6    let res =[];
7
8    for( t of tokens){
9        if(t=="*"){
10            res.push(parseInt(res.pop())* parseInt(res.pop()))
11            
12        }else if(t=='-'){
13            let a= parseInt(res.pop())
14            let b = parseInt(res.pop())
15            res.push(b- a)
16        }else if(t=='/'){
17            let a= parseInt(res.pop())
18            let b = parseInt(res.pop())
19            res.push(Math.trunc(b/a))
20        }else if(t=='+'){
21            res.push(parseInt(res.pop())+ parseInt(res.pop()))
22
23        }else{
24            res.push(parseInt(t))
25        }
26    }
27    return res[0]
28    
29};