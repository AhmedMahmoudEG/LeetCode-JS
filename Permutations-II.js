1/**
2 * @param {number[]} nums
3 * @return {number[][]}
4 */
5var permuteUnique = function(nums) {
6    let used=[];
7    let result =[];
8    let path =[]
9            nums.sort((a,b)=>a-b)
10    function recursion(path){
11        if(path.length==nums.length){
12            result.push([...path])
13            return
14        }
15        for(let i =0;i<nums.length;i++){
16            if (used[i]) continue;
17            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
18            path.push(nums[i])
19            used[i]= true
20            recursion(path)
21            path.pop();
22            used[i]=false
23        }
24    }
25    recursion(path);
26    return result
27};