1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(nums, target) {
7    let map = new Map();
8    for(let i =0;i<nums.length;i++){
9        let need = target - nums[i];
10        if(map.has(need))  return [map.get(need), i];
11        map.set(nums[i],i)
12    }
13    /*
14    for(let i =0;i<nums.length;i++){
15        for(let j=i+1;j<nums.length;j++){
16            if(nums[i]+nums[j]==target) return [i,j]
17        }
18    }
19    */
20};