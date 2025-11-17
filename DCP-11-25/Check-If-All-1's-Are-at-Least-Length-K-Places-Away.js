/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let prev = -Infinity
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            if(i-prev<=k) return false
            prev = i
        }
    }
    return true


};