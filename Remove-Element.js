/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let p1=0;
    let p2=0;
    while(p1<nums.length){
        if(nums[p1]!=val){
            nums[p2]=nums[p1]
            p2++;
        }
        p1++
    }
    return p2;

};