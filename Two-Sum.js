/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        //storing the index
        map.set(nums[i],i)
    }
    for(let i =0;i<nums.length;i++){
        const y = target -nums[i]
        if(map.get(y)!==i&&map.has(y)) return [i,map.get(y)]
    }
   
};