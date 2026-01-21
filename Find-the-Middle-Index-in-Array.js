1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var findMiddleIndex = function(nums) {
6    let prefix =[];
7    prefix[0]=nums[0]
8    for(let i=1;i<nums.length;i++){
9        prefix[i] = nums[i] + prefix[i-1]
10    }
11    let total = prefix[nums.length-1]
12    for(let i =0;i<nums.length;i++){
13    let left = (i == 0) ? 0 : prefix[i - 1]
14    let right = total - prefix[i]
15    if(left ==right) return i
16    }
17    return -1
18};