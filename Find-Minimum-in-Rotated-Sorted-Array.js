/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // If nums[l] < nums[r], then the subarray is already sorted in increasing order.
    // So, the smallest value must be at index l.

    // Since the array is sorted but rotated, we use binary search to find the rotation point.

    // We calculate the middle index (m).
    // - If nums[m] >= nums[l], it means the left half [l...m] is sorted.
    //   So the minimum must be in the right half, so we search in [m+1...r].
    // - Otherwise, the rotation point (minimum) is in the left half, so we search in [l...m-1].
    let l = 0;
    let r = nums.length-1;
    let res = nums[0];
    while(l<=r){
        //if sorted in increasing order
        if(nums[l]<nums[r]){
            return Math.min(res,nums[l])
            break;
        }
        let m = Math.floor((l+r)/2)
        res = Math.min(res,nums[m])
        //decicde wich part of array to look in 
        if(nums[m]>=nums[l]){
            l = m+1
        }else{
            r = m-1
        }
    }
    return res
};