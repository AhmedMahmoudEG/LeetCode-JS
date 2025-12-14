1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var runningSum = function(nums) {
6    
7    let res= new Array(nums.length);
8    res[0]=nums[0]
9    for(let i=1;i<nums.length;i++){
10        res[i]=res[i-1]+nums[i]
11    }
12    return res;
13};