/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let res = new Set()
    for(let n of nums1){
        if(nums2.includes(n)) res.add(n)
    }
    for(let n of nums1){
        if(nums2.includes(n)) res.add(n)
    }
    for(let n of nums2){
        if(nums3.includes(n)) res.add(n)
    }
    for(let n of nums3){
        if(nums1.includes(n)) res.add(n)
    }
    
    return Array.from(res)
};