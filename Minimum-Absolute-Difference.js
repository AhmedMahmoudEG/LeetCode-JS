1/**
2 * @param {number[]} arr
3 * @return {number[][]}
4 */
5var minimumAbsDifference = function(arr) {
6    arr.sort((a,b)=>a-b);
7    let res =[]
8    let min = Infinity
9    console.log(min)
10    for(let i =0;i<arr.length-1;i++){
11        min = Math.min(min,arr[i+1]-arr[i])
12
13        
14    }
15    for(let i =0;i<arr.length-1;i++){
16                if(arr[i+1]-arr[i]==min){
17            res.push([arr[i],arr[i+1]])
18        }
19    }
20    return res
21};