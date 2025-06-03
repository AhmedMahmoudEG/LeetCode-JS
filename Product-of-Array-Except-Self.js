/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res =[];
    let prefix = 1;
    res[0]=1;
    for(let i = 1;i<nums.length;i++){
        res[i] = res[i-1] * nums[i-1]
    }
    for(let i = nums.length-1;i>=0; i--){
        res[i] = res[i] * prefix;
        prefix *=nums[i]
    }

    //approach with space O(n) time O(n)
    /*
    let left=[];
    let right=[];
    let res=[];
    left[0]=1;
    right[nums.length-1]=1;
    for(let i =1;i<nums.length;i++){
        left[i] = left[i-1] * nums[i-1];
    }
    console.log(left)
    for(let i=nums.length-2;i>=0;i--){
        right[i]= right[i+1] * nums[i+1];
    }
    console.log(right)
    for(let i =0;i<nums.length;i++){
        res.push(right[i]*left[i])
    }
    */
    return res;
};