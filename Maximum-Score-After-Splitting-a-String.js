1/**
2 * @param {string} s
3 * @return {number}
4 */
5var maxScore = function(s) {
6    let res = 0;
7    let n = s.length
8        let leftZero = 0
9        let rightOne = 0
10        for(let i =0;i<n;i++){
11            if(s[i]=='1')rightOne++
12        }
13    for(let i=0;i<n-1;i++){
14        if(s[i]=='0'){
15
16        leftZero++;
17        }else {rightOne--}
18        let score = leftZero + rightOne 
19        
20        res = Math.max(res, score)
21    }
22    return res
23};