1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var productExceptSelf = function(nums) {
6    
7    //space O(1) timee O(n)
8    let res=[]
9    res[0]= 1
10    for(let i =1;i<nums.length;i++){
11        res[i] =nums[i-1] * res[i-1]
12    }
13    let suffix =1
14    for(let i=nums.length-2;i>=0;i--){
15        suffix =nums[i+1] * suffix 
16        res[i] = suffix * res[i] 
17    }
18    return res
19    
20    /*
21    //space O(n+m) time O(n)
22    let prefix=[]
23    prefix[0] = 1 
24    for(let i = 1 ; i<nums.length;i++){
25        prefix[i] = prefix[i-1] * nums[i-1]
26    }
27    let suffix = []
28    suffix[nums.length-1] = 1
29    for(let i=nums.length-2;i>=0;i--){
30        suffix[i] = suffix[i+1] * nums[i+1]
31    }
32    let res =[]
33    for(let i=0;i<nums.length;i++){
34        res[i] = prefix[i] * suffix[i]
35    }
36    return res
37    */
38};