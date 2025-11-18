/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let expectedSum = n*(n+1) /2 
    let currentSum = nums.reduce((a,b)=>a+b,0)
    console.log(expectedSum)
    return expectedSum - currentSum
    //O(n2)
    /*
    for(let i=0;i<nums.length;i++){
        if(!nums.includes(i)) return i
    }
    return nums.length;
    */
    /*
    //(nlogn)
    nums = nums.sort((a,b)=>a-b);
    let n = nums.length;
    for(let i =0;i<n;i++){
        if(nums[i]!=i){
            return i
        }
    }
    return n
    */
};