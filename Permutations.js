1/**
2 * @param {number[]} nums
3 * @return {number[][]}
4 */
5var permute = function(nums) {
6    let result =[];
7    let path=[];
8    let used=[];
9    function backtracing(path){
10        //baseCase
11        if(path.length==nums.length){
12            result.push([...path])
13            return
14        }
15        //loop
16        for(let i=0;i<nums.length;i++){
17            //check if used
18            if(used[i]) continue
19            //choose element
20            used[i]=true
21            path.push(nums[i])
22            //recurive
23            backtracing(path)
24            //remove
25            path.pop()
26            used[i]=false
27        }
28    }
29    backtracing([])
30    return result
31};