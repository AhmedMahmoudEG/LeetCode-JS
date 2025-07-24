/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // pop O(1) but worst case you are going to do that O(n) times
    for(let i = nums1.length-m ;i>0 ;i--){
        nums1.pop()
    }
    //push o(1) but worst case you are going to do that o(n) times
    for(let j =0;j<nums2.length;j++){
        nums1.push(nums2[j])
    }
    // O((m + n) log (m + n))
    nums1 = nums1.sort((a,b)=>a-b)
};