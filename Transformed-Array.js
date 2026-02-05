1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var constructTransformedArray = function(nums) {
6   let n = nums.length
7   let res =  new Array(n)
8   for(let i =0; i<n;i++){
9     let x = nums[i]
10     if(x == 0){
11        res[i]  = 0
12     }else{
13        const target = ((i + x) % n +n ) % n
14        res[i] = nums[target]
15     }
16
17   }
18
19   /*
20   for(let i =0; i <n;i++){
21    if(nums[i]>0){
22       let j = (i + nums[i]) % n
23    res[i] = nums[j]
24    }else if(nums[i]<0){
25        let j = ((i + nums[i]) % n + n) % n
26        res[i] = nums[j]
27    }else if(nums[i]==0){
28        res[i]=nums[i]
29    }
30   }
31   */
32   return res
33};