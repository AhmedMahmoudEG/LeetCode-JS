/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    //sorting O(nlogn)
    nums.sort((a,b)=>a-b)
    let n = nums.length;
    let option1 = nums[n-1]*nums[n-2]*nums[n-3]
    //incase of negative getting first 2 element because the're negative
    //with the last big element (-1 * -1) * last = 1 * lastEl
    let option2= nums[0]*nums[1]*nums[n-1]
    return Math.max(option1,option2)
    
    //brute force o(n^3)
    /*
    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let product = nums[i] * nums[j] * nums[k];
                max = Math.max(max, product);
            }
        }
    }
    */

    return max;
};