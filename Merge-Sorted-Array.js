/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for(let i=nums1.length-m;i>0;i--){
        nums1.pop();
    }
    for(let i=0;i<nums2.length;i++){
        nums1.push(nums2[i])
    }
    return nums1.sort((a,b)=>a-b)
};