/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let expectedSum = (n*(n+1)) / 2 
    let acutalSum = nums.reduce((acc,num)=>acc+num,0)    
    return expectedSum - acutalSum
    //my solution O(n^2)
    /*
    let i =0;
    let n = nums.length;
    while(i<n){
        console.log(i)
        if(!nums.includes(i)){
            return i
        }
        i++
    }
    return i;
    */
};