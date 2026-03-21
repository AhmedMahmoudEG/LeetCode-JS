1/**
2 * @param {string} s
3 * @return {number}
4 */
5var romanToInt = function(s) {
6    let values = {'I':1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
7    let res = 0
8    for(let i =0;i<s.length;i++){
9        let curr = values[s[i]]
10        let next = values[s[i+1]]
11        if(next&&curr <next ){
12            res += next - curr
13            i++
14        }else{
15            res += curr
16        }
17
18    }
19    return res
20};