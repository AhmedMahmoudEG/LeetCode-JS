1/**
2 * @param {number} n
3 * @return {string[]}
4 */
5var generateParenthesis = function(n) {
6    let result =[];
7    let path =[];
8    let closed =0; 
9    let open = 0;
10    function backtracking(open,close,path){
11        if(path.length==2 * n){
12            result.push(path.join(''))
13            return;
14        }
15        if(open<n){
16            path.push('(')
17                    backtracking(open+1,close,path)    
18            path.pop()
19
20        }
21        if(close<open){
22            path.push(')')
23        backtracking(open,close+1,path)    
24            path.pop();
25        }
26    }
27    backtracking(0, 0, [])
28
29    return result
30};