1/**
2 * @param {number[]} nums
3 * @return {number[][]}
4 */
5var threeSum = function(nums) {
6    let res = []
7    nums.sort((a,b)=>a-b)
8    let i =0;
9    for(let i=0;i<nums.length-2;i++){
10        if(i>0&&nums[i]==nums[i-1]) continue
11        let l = i+1;
12        let r = nums.length -1
13        while(l<r){
14            let sum = nums[i]+nums[l]+nums[r]
15            if(sum==0){
16                res.push([nums[i],nums[l],nums[r]])
17                l++;
18                r--
19                while(l<r&&nums[l]==nums[l-1])l++
20                while(l<r&&nums[r]==nums[r+1]) r--
21            }else if(sum>0){
22                r--
23            }else{
24                l++
25            }
26        }
27    }
28    return res
29};