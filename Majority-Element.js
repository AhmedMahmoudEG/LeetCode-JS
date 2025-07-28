/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //first solution using map
    /*
    let map = new Map();
    for(let n of nums){
        map.set(n,(map.get(n)||0)+1)
    }
    let maxValue = 0
    for (let [key, value] of map) {
    if (value > maxValue) {
        maxValue = value;
        maxKey = key;
    }
}
    return maxKey
    */
    //solution 2 
    /*
    //sorting 
    //O(nLogn)
    nums = nums.sort((a,b)=>a-b)
    //If you sort the array, the majority element must occupy the middle position.
    //Why? Because it appears more than half the time, it must span the center.
    return nums[Math.floor(nums.length / 2)];
    */
    //solution 3
    let ans = nums[0]
    let count = 1;
    for(let i =1;i<nums.length;i++){
        if(count ==0){
            ans = nums[i]
            count = 1
        }else if(ans == nums[i]){
            count++;
        }else {
            count --
        }
    }
    return ans
};