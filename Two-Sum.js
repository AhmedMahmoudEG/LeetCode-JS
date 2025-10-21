/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    //[2,7,11,15] t=9 ex=[0,1]
    for (let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            return [i,map.get(target-nums[i])]
        }
        map.set(nums[i],i)
    }
};