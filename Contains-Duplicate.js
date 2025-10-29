/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    /*
    let set = new Set();
    for (let i=0;i<nums.length;i++){
        if(set.has(nums[i])) return true
        set.add(nums[i])
    }
    return false
    */
    const set = new Set(nums);
   return set.size !== nums.length
};