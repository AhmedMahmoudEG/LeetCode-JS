/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    /* 
    //time O(n logn)
    return nums.map(e=>e*e).sort((a,b)=>a-b)
    */
    let left=0;
    let right = nums.length-1
    let result = new Array(nums.length);
    let index = nums.length-1
    while(left<=right){
        if(Math.abs(nums[left])>Math.abs(nums[right])){
            result[index]=nums[left]*nums[left]
            left++
        }else{
            result[index]=nums[right]*nums[right]
            right--
        }
        index--
    }
    return result
};