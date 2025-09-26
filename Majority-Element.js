/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        map.set(nums[i],(map.get(nums[i])||0) +1)
    }
    let maxKey =null
    let maxValue = 0;
    for(let [key,value] of map.entries()){
        if(value>maxValue){
            maxValue =value
            maxKey = key
        }
    }
    return maxKey
};