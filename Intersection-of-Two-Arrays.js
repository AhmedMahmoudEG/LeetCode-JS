/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let map = new Map();
    let res = new Set();
    for(let i =0;i<nums1.length;i++){
        map.set(nums1[i],1)
    }
    for(let i=0;i<nums2.length;i++){
        if(map.has(nums2[i])){
            res.add(nums2[i])
        }
    }
    return [...res]
    //o(n^2)
    /*
    let res = new Set();
    for(let i =0;i<nums1.length;i++){
        for(let j = 0;j<nums2.length;j++){
            if(nums1[i]==nums2[j]){
            res.add(nums1[i]);
            }
            }
        }
    
    return [...res]
    */
};