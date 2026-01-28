1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var removeDuplicates = function(nums) {
6    let start =0;
7    for(let i = 0;i<nums.length;i++){
8        if(nums[i] !==nums[i+1]){
9            nums[start]=nums[i]
10            start++
11        }
12    }
13    return start
14};