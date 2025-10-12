/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let l=0;
    let i=0
    let r=nums.length-1
    while(i<=r){
        if(nums[i]==0){
            [nums[l],nums[i]]=[nums[i],nums[l]]
            l++
            i++
        }else if(nums[i]==1) {i++}
        else{
            [nums[i],nums[r]]=[nums[r],nums[i]]
            r--
        }
    }
    return nums
};