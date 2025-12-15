1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var pivotIndex = function(nums) {
6    let res = new Array(nums.length)
7    res[0]=nums[0]
8    for(let i =1;i<nums.length;i++){
9        res[i]= res[i-1]+ nums[i]
10    }
11    let totalSum =res[nums.length-1]
12    for(let i=0;i<res.length;i++){
13        let leftSum  = (i == 0) ? 0 : res[i - 1]
14        let  rightSum = totalSum - res[i]
15        if(leftSum==rightSum) return i
16
17    }
18    return -1
19};