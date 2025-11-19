/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let p1=0;
    let res =[]
    let set = new Set()
    for(let i of nums2){
        if(nums1.includes(i)) set.add(i);
    }
    return Array.from(set)
 
};