/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    //sliding window solution;
    let left = 0;
    let r = 0;
    let max=0;
    let numZeros=0
    for(let right=0;right<nums.length;right++){
        if(nums[right]===0){ 
        numZeros++
        } 
        while(numZeros>k){
        if(nums[left]===0){
            numZeros--
        }
        left++
        }    
        max = Math.max(max,right-left+1)
    }
    return max
    }
    /*
    let max = 0;
    //bruteforce solution O(n^2)
    for(let i=0;i<nums.length;i++){
        for(let j=i;j<nums.length;j++){
            let zeroCount = 0
            for (let c = i; c <= j; ++c) {
                if (nums[c] == 0) ++zeroCount;
            }
            
            if (zeroCount <= k) {
                max = Math.max(max, j - i + 1);
            }

        }
        
    }
    return max;
    */

