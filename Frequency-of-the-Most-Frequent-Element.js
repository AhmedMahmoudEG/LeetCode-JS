/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
  nums.sort((a,b)=>a-b)
   let left=0;
   let total=0;
   let res =1
   for(let right=0;right<nums.length;right++){
    total +=nums[right]
    // shrink window if cost exceeds k
    while(nums[right]*(right-left+1)-total>k){
        total -=nums[left]
        left++
    }
    res = Math.max(res,right-left+1)
   }
   return res
};