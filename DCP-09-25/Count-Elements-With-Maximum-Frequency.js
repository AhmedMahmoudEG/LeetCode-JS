/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        map.set(nums[i],(map.get(nums[i])||0)+1)
    }
    let res =0;
    let max = Math.max(...map.values())
    for(let [key,value] of map.entries()){
        if(value==max) res+=value

    }
    return res
};